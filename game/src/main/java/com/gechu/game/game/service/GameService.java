package com.gechu.game.game.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.gechu.game.game.dto.GameDto;
import com.gechu.game.game.dto.GameResponseDto;
import com.gechu.game.game.entity.GameEntity;
import com.gechu.game.game.entity.GameGenreEntity;
import com.gechu.game.game.entity.GamePlatformEntity;
import com.gechu.game.game.entity.GenreEntity;
import com.gechu.game.game.entity.PlatformEntity;
import com.gechu.game.game.repository.GameGenreRepository;
import com.gechu.game.game.repository.GamePlatformRepository;
import com.gechu.game.game.repository.GameRepository;
import com.gechu.game.game.repository.GenreRepository;
import com.gechu.game.game.repository.PlatformRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GameService {

	private final GameRepository gameRepository;
	private final GameGenreRepository gameGenreRepository;
	private final GamePlatformRepository gamePlatformRepository;
	private final GenreRepository genreRepository;
	private final PlatformRepository platformRepository;

	public void insertGame(GameDto gameDto) {
		GameEntity gameEntity = GameDto.toEntity(gameDto);
		gameRepository.save(gameEntity);
	}

	public List<GameResponseDto> findAllGamesBySeqIn(List<Integer> gameSeqs) {
		List<GameEntity> gameEntities = gameRepository.findAllBySeqIn(gameSeqs);

		List<GameResponseDto> gameResponseDtos = gameEntities.stream()
			.map(GameEntity::toDtoUser)
			.collect(Collectors.toList());

		setGenresAndPlatforms(gameResponseDtos);

		return gameResponseDtos;
	}

	public List<GameResponseDto> findAllGamesBySlugIn(List<String> gameSlugs) {
		List<GameEntity> gameEntities = gameRepository.findAllByGameSlugIn(gameSlugs);

		List<GameResponseDto> gameResponseDtos = gameEntities.stream()
			.map(GameEntity::toDtoDetail)
			.collect(Collectors.toList());

		setGenresAndPlatforms(gameResponseDtos);

		return gameResponseDtos;
	}

	public GameResponseDto findGameBySlug(String gameSlug) {
		GameEntity gameEntity = gameRepository.findByGameSlug(gameSlug);
		Integer seq = gameEntity.getSeq();

		GameResponseDto gameResponseDto = GameEntity.toDtoDetail(gameEntity);

		gameResponseDto.setGenres(getGameGenres(seq));
		gameResponseDto.setPlatforms(getGamePlatforms(seq));

		return gameResponseDto;
	}

	public GameResponseDto findGameBySeq(Integer gameSeq) {
		GameEntity gameEntity = gameRepository.findBySeq(gameSeq);

		GameResponseDto gameResponseDto = GameEntity.toDtoDetail(gameEntity);

		gameResponseDto.setGenres(getGameGenres(gameSeq));
		gameResponseDto.setPlatforms(getGamePlatforms(gameSeq));

		return gameResponseDto;
	}

	private List<String> getGameGenres(Integer gameSeq) {

		List<GameGenreEntity> gameGenreEntities = gameGenreRepository.findByGameSeq(gameSeq);
		List<Integer> genreSeqs = gameGenreEntities.stream()
			.map(GameGenreEntity::getGenreSeq)
			.collect(Collectors.toList());

		List<GenreEntity> genreEntities = genreRepository.findBySeqIn(genreSeqs);

		return GenreEntity.toGenreSlugList(genreEntities);
	}

	private List<String> getGamePlatforms(Integer gameSeq) {

		List<GamePlatformEntity> gamePlatformEntities = gamePlatformRepository.findByGameSeq(gameSeq);
		List<Integer> platformSeqs = gamePlatformEntities.stream()
			.map(GamePlatformEntity::getPlatformSeq)
			.collect(Collectors.toList());

		List<PlatformEntity> platformEntities = platformRepository.findBySeqIn(platformSeqs);

		return PlatformEntity.toPlatformSlugList(platformEntities);
	}

	private void setGenresAndPlatforms(List<GameResponseDto> gameResponseDtos) {
		for (GameResponseDto gameResponseDto : gameResponseDtos) {
			Integer seq = gameResponseDto.getSeq();

			gameResponseDto.setGenres(getGameGenres(seq));
			gameResponseDto.setPlatforms(getGamePlatforms(seq));
		}
	}
}
