package com.gechu.game.game.service;

import org.springframework.stereotype.Service;

import com.gechu.game.game.dto.GenreApiDto;
import com.gechu.game.game.dto.GenreDto;
import com.gechu.game.game.entity.GenreEntity;
import com.gechu.game.game.repository.GenreRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GenreService {

	private final GenreRepository genreRepository;

	public void insertGenres(GenreApiDto genreApiDto) {
		GenreEntity genreEntity = GenreApiDto.toEntity(genreApiDto);
		genreRepository.save(genreEntity);
	}

	public GenreDto findGenreBySlug(String slug) {
		GenreEntity genreEntity = genreRepository.findByGenreSlug(slug);

		return GenreEntity.toDto(genreEntity);
	}
}
