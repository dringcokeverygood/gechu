package com.gechu.crawl.igdb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

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
import com.gechu.crawl.exception.RangeOverException;
import com.gechu.crawl.igdb.dto.GameDto;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class CrawlGameService {

	@Value("${twitch.CLIENT_ID}")
	private String CLIENT_ID;
	@Value("${twitch.CLIENT_SECRET}")
	private String CLIENT_SECRET;

	public void crawl(int start, int end, int range) {

		if (range > 500 || range < 1) {
			throw new RangeOverException("range must be greater than 0 and less than 501");
		}

		ObjectMapper objectMapper = new ObjectMapper();
		objectMapper.enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);

		TwitchAuthenticator tAuth = TwitchAuthenticator.INSTANCE;
		TwitchToken token = tAuth.requestTwitchToken(CLIENT_ID, CLIENT_SECRET);

		IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
		wrapper.setCredentials(CLIENT_ID, token.getAccess_token());

		for (int i = start; i < end; i = i + range) {

			APICalypse apiCalypse = new APICalypse()
				.fields("id, involved_companies, platforms, genres, keywords, name, release_dates, artworks")
				.limit(range)
				.search("tears of the kingdom")
				.where(String.format("id >= %d & id < %d", i, i + range))
				.sort("id", Sort.ASCENDING);

			String json = null;
			try {
				json = JsonRequestKt.jsonGames(wrapper, apiCalypse);
				List<GameDto> gameDtos = objectMapper.readValue(json, new TypeReference<List<GameDto>>() {});

				log.info("하이");

			} catch (RequestException e) {
				log.warn("해당 범위에 게임이 존재하지 않습니다. 시작번호: {}, 끝번호: {}", i, i + range);
				log.info("새 범위로 탐색을 시작합니다.");

				e.printStackTrace();
			} catch (JsonProcessingException e) {

			}

		}
	}
}
