package com.gechu.crawl.game.service;

import org.springframework.stereotype.Service;

import com.gechu.crawl.game.dto.GenreApiDto;
import com.gechu.crawl.game.dto.GenreDto;
import com.gechu.crawl.game.entity.GenreEntity;
import com.gechu.crawl.game.repository.GenreRepository;

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
