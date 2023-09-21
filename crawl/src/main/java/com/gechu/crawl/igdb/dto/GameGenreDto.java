package com.gechu.crawl.igdb.dto;

import com.gechu.crawl.igdb.entity.GameGenreEntity;

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
public class GameGenreDto {

	private Integer gameSeq;
	private Integer genreSeq;

	public static GameGenreEntity toEntity(GameGenreDto gameGenreDto) {
		return GameGenreEntity.builder()
			.gameSeq(gameGenreDto.getGameSeq())
			.genreSeq(gameGenreDto.getGenreSeq())
			.build();
	}
}
