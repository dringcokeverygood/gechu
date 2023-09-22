package com.gechu.crawl.game.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.gechu.crawl.game.dto.GameApiDto;
import com.gechu.crawl.game.dto.GameGenreDto;
import com.gechu.crawl.game.entity.GameGenreEntity;
import com.gechu.crawl.game.repository.GameGenreRepository;

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

	public void insertAllGameGenres(List<GameGenreDto> gameGenreDtos) {
		List<GameGenreEntity> gameGenreEntities = gameGenreDtos.stream().map(GameGenreDto::toEntity).collect(Collectors.toList());
		gameGenreRepository.saveAll(gameGenreEntities);
		gameGenreDtos.clear();
	}
}
