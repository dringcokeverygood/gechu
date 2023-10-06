package com.gechu.game.game.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.gechu.game.game.dto.GameApiDto;
import com.gechu.game.game.dto.GameGenreDto;
import com.gechu.game.game.entity.GameGenreEntity;
import com.gechu.game.game.repository.GameGenreRepository;

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
