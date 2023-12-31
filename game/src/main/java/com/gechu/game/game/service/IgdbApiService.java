package com.gechu.game.game.service;

import java.time.LocalDateTime;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.api.igdb.apicalypse.APICalypse;
import com.api.igdb.apicalypse.Sort;
import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.IGDBWrapper;
import com.api.igdb.request.JsonRequestKt;
import com.api.igdb.request.TwitchAuthenticator;
import com.api.igdb.utils.TwitchToken;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gechu.game.exception.RangeOverException;
import com.gechu.game.game.dto.CompanyApiDto;
import com.gechu.game.game.dto.CoverApiDto;
import com.gechu.game.game.dto.GameApiDto;
import com.gechu.game.game.dto.GameDto;
import com.gechu.game.game.dto.GenreApiDto;
import com.gechu.game.game.dto.InvolvedCompanyApiDto;
import com.gechu.game.game.dto.PlatformApiDto;
import com.gechu.game.game.dto.ReleaseDateDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class IgdbApiService {

	private final GameService gameService;
	private final GenreService genreService;
	private final PlatformService platformService;
	private final GameGenreService gameGenreService;
	private final GamePlatformService gamePlatformService;

	@Value("${twitch.CLIENT_ID}")
	private String CLIENT_ID;
	@Value("${twitch.CLIENT_SECRET}")
	private String CLIENT_SECRET;

	private ObjectMapper objectMapper;
	private TwitchAuthenticator tAuth;
	private TwitchToken token;
	private IGDBWrapper wrapper;

	@PostConstruct
	public void init() {
		objectMapper = new ObjectMapper();
		objectMapper.enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);

		tAuth = TwitchAuthenticator.INSTANCE;
		token = tAuth.requestTwitchToken(CLIENT_ID, CLIENT_SECRET);

		wrapper = IGDBWrapper.INSTANCE;
		wrapper.setCredentials(CLIENT_ID, token.getAccess_token());
	}

	public void addGames(int start, int end, int range) {

		if (range > 500 || range < 1) {
			throw new RangeOverException("range must be greater than 0 and less than 501");
		}

		for (int i = start; i < end; i = i + range) {
			log.info("API call start, from: {}, end: {}", i, i + range);
			try {
				List<GameApiDto> gameApiDtos = crawlGamesByIdFromTo(i, i + range);
				if (gameApiDtos.size() == 0) {
					log.info("더 이상 호출 할 정보가 없습니다. API 호출을 종료합니다.");
					break;
				}

				for (GameApiDto gameApiDto : gameApiDtos) {
					if (gameApiDto.getSlug() == null || gameApiDto.getPlatforms() == null || gameApiDto.getGenres() == null || gameApiDto.getInvolved_companies() == null ||
						gameApiDto.getArtworks() == null || gameApiDto.getRelease_dates() == null) continue;
					GameDto gameDto = GameDto.initByGameApiDto(gameApiDto);
					setPublishAndDevelopByInvolvedCompanies(gameDto, gameApiDto.getInvolved_companies());
					gameDto.setCreateDate(getReleaseDates(gameApiDto.getId()));
					gameDto.setGameTitleImageUrl(setGameTitleImageUrlByArtworks(gameApiDto.getId()));

					gameService.insertGame(gameDto);
					gameGenreService.insertGameGenre(gameApiDto);
					gamePlatformService.insertGamePlatform(gameApiDto);
					log.info("{}번 게임 삽입 완료", gameApiDto.getId());

				}
				log.info("games: {} ~ {} 범위 내의 API요청 및 데이터베이스 등록 완료", i, i + range);

			} catch (RequestException e) {
				log.warn("games: 잘못된 API 요청입니다.");
			} catch (JsonProcessingException e) {
				log.warn("games: json format is incorrect");
			}
			log.info("games: 전체 API요청 및 데이터베이스 등록 완료, 범위: {} ~ {}", start, end);
		}
	}
	public List<GameApiDto> crawlGamesByIdFromTo(int from, int to) throws RequestException, JsonProcessingException {
		APICalypse apiCalypse = new APICalypse()
			.fields("id, involved_companies, platforms, genres, name, release_dates, artworks, slug")
			.limit(to - from)
			.where(String.format("id >= %d & id < %d", from, to))
			.sort("id", Sort.ASCENDING);

		String json = JsonRequestKt.jsonGames(wrapper, apiCalypse);
		return objectMapper.readValue(json, new TypeReference<List<GameApiDto>>() {
		});
	}

	public void addPlatforms() {
		APICalypse apiCalypse = new APICalypse()
			.fields("id, name, slug")
			.limit(500)
			.sort("id", Sort.ASCENDING);

		try {
			String json = JsonRequestKt.jsonPlatforms(wrapper, apiCalypse);
			List<PlatformApiDto> platformApiDtos = objectMapper.readValue(json,
				new TypeReference<List<PlatformApiDto>>() {
				});

			platformApiDtos.forEach(platformService::insertPlatforms);

			log.info("platforms add success");
		} catch (RequestException e) {
			log.warn("platforms: Invalid API request");
		} catch (JsonProcessingException e) {
			log.warn("platforms: json format is incorrect");
		}
	}

	public void addGenres() {
		APICalypse apiCalypse = new APICalypse()
			.fields("id, name, slug")
			.limit(500)
			.sort("id", Sort.ASCENDING);

		try {
			String json = JsonRequestKt.jsonGenres(wrapper, apiCalypse);
			List<GenreApiDto> genreApiDtos = objectMapper.readValue(json, new TypeReference<List<GenreApiDto>>() {
			});

			genreApiDtos.forEach(genreService::insertGenres);

			log.info("genre add success");
		} catch (RequestException e) {
			log.warn("genre: Invalid API request");
		} catch (JsonProcessingException e) {
			log.warn("genre: json format is incorrect");
		}
	}

	public void setPublishAndDevelopByInvolvedCompanies(GameDto gameDto, List<Integer> involvedCompanies) {
		APICalypse apiCalypse = new APICalypse()
			.fields("company, developer, publisher")
			.limit(500)
			.where(String.format("id = %s", listToString(involvedCompanies)))
			.sort("id", Sort.ASCENDING);

		try {
			String json = JsonRequestKt.jsonInvolvedCompanies(wrapper, apiCalypse);
			List<InvolvedCompanyApiDto> involvedCompanyApiDtos = objectMapper.readValue(json,
				new TypeReference<List<InvolvedCompanyApiDto>>() {
				});
			for (int i = 0; i < involvedCompanyApiDtos.size(); i++) {
				InvolvedCompanyApiDto involvedCompanyApiDto = involvedCompanyApiDtos.get(i);
				if (involvedCompanyApiDto.getDeveloper()) {
					gameDto.setDevelop(getCompany(involvedCompanyApiDto.getCompany()));
				}
				if (involvedCompanyApiDto.getPublisher()) {
					gameDto.setPublish(getCompany(involvedCompanyApiDto.getCompany()));
				}
			}
			// log.info("involvedCompanies call success");
		} catch (RequestException e) {
			log.warn("involvedCompanies: Invalid API request");
		} catch (JsonProcessingException e) {
			log.warn("involvedCompanies: json format is incorrect");
		}
	}

	private String setGameTitleImageUrlByArtworks(Integer gameId) {
		APICalypse apiCalypse = new APICalypse()
			.fields("image_id")
			.where(String.format("game = %d", gameId));

		String returnVal = null;

		try {
			String json = JsonRequestKt.jsonCovers(wrapper, apiCalypse);
			List<CoverApiDto> coverApiDtos = objectMapper.readValue(json,
				new TypeReference<List<CoverApiDto>>() {
				});

			if (coverApiDtos.size() == 0) {
				return "unknown-image-url";
			}

			returnVal = String.format("https://images.igdb.com/igdb/image/upload/t_cover_big/%s.png",
				coverApiDtos.get(0).getImage_id());
			// log.info("title_image call success");
		} catch (RequestException e) {
			log.warn("title_image: Invalid API request");
		} catch (JsonProcessingException e) {
			log.warn("title_image: json format is incorrect");
		}

		if (returnVal == null) {
			return "unknown-image-url";
		}

		return returnVal;
	}

	private LocalDateTime getReleaseDates(Integer gameId) {
		APICalypse apiCalypse = new APICalypse()
			.fields("date")
			.where(String.format("game = %d", gameId));

		LocalDateTime returnVal = null;

		try {
			String json = JsonRequestKt.jsonReleaseDates(wrapper, apiCalypse);
			List<ReleaseDateDto> releaseDateDtos = objectMapper.readValue(json,
				new TypeReference<List<ReleaseDateDto>>() {
				});

			ReleaseDateDto releaseDateDto = releaseDateDtos.get(0);
			releaseDateDto.setDateTime();

			returnVal = releaseDateDto.getCreateDate();

		} catch (RequestException e) {
			log.warn("releaseDate: Invalid API request");
		} catch (JsonProcessingException e) {
			log.warn("releaseDate: json format is incorrect");
		}

		if (returnVal == null) {
			return LocalDateTime.now();
		}

		return returnVal;
	}

	private String getCompany(Integer companyId) {
		APICalypse apiCalypse = new APICalypse()
			.fields("slug")
			.limit(500)
			.where(String.format("id = %d", companyId));
		List<CompanyApiDto> companyApiDtos = null;
		try {
			String json = JsonRequestKt.jsonCompanies(wrapper, apiCalypse);
			companyApiDtos = objectMapper.readValue(json, new TypeReference<List<CompanyApiDto>>() {
			});
		} catch (RequestException e) {
			log.warn("company: Invalid API request");
		} catch (JsonProcessingException e) {
			log.warn("company: json format is incorrect");
		}
		if (companyApiDtos == null || companyApiDtos.size() == 0) {
			return "unknown-company";
		}

		return companyApiDtos.get(0).getSlug();
	}

	public String listToString(List<?> list) {
		StringBuffer sb = new StringBuffer();
		sb.append('(');
		for (int i = 0; i < list.size(); i++) {
			sb.append(list.get(i).toString());
			if (i != list.size() - 1) {
				sb.append(", ");
			}
		}
		sb.append(')');
		return sb.toString();
	}

}
