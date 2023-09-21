package com.gechu.crawl.igdb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gechu.crawl.igdb.dto.GameApiDto;
import com.gechu.crawl.igdb.entity.GameGenreEntity;
import com.gechu.crawl.igdb.entity.GamePlatformEntity;
import com.gechu.crawl.igdb.repository.GameGenreRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GameGenreService {

	private final GameGenreRepository gameGenreRepository;

	public void insertGameGenre(GameApiDto gameApiDto) {
		Integer gameSeq = gameApiDto.getId();
		List<Integer> genres = gameApiDto.getGenres();
		for (Integer genreSeq : genres) {
			gameGenreRepository.save(GameGenreEntity.builder()
				.gameSeq(gameSeq)
				.genreSeq(genreSeq)
				.build());
		}
	}
}
