package com.gechu.crawl.igdb.service;

import org.springframework.stereotype.Service;

import com.gechu.crawl.igdb.dto.GenreApiDto;
import com.gechu.crawl.igdb.dto.GenreDto;
import com.gechu.crawl.igdb.entity.GenreEntity;
import com.gechu.crawl.igdb.repository.GenreRepository;

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
