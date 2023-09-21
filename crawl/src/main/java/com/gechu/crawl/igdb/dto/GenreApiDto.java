package com.gechu.crawl.igdb.dto;

import com.gechu.crawl.igdb.entity.GenreEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@Builder
public class GenreApiDto {
	private Integer id;
	private String name;
	private String slug;

	public static GenreEntity toEntity(GenreApiDto genreApiDto) {
		return GenreEntity.builder()
			.seq(genreApiDto.getId())
			.genreName(genreApiDto.getName())
			.genreSlug(genreApiDto.getSlug())
			.build();
	}
}
