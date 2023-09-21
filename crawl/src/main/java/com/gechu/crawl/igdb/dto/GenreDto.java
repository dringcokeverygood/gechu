package com.gechu.crawl.igdb.dto;

import com.gechu.crawl.igdb.entity.GenreEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GenreDto {
	private Integer seq;
	private String genreName;
	private String genreSlug;

	public static GenreEntity toEntity(GenreDto genreDto) {
		return GenreEntity.builder()
			.seq(genreDto.getSeq())
			.genreName(genreDto.getGenreName())
			.genreSlug(genreDto.getGenreSlug())
			.build();
	}
}
