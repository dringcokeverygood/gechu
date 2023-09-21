package com.gechu.crawl.igdb.dto;

import java.time.LocalDateTime;

import com.gechu.crawl.igdb.entity.GameEntity;

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
public class GameDto {
	private Integer Id;
	private String gameTitle;
	private String gameSlug;
	private String gameTitleImageUrl;
	private String develop;
	private String publish;
	private LocalDateTime createDate;

	public static GameDto initByGameApiDto(GameApiDto gameApiDto) {
		return GameDto.builder()
			.gameTitle(gameApiDto.getName())
			.gameSlug(gameApiDto.getSlug())
			.build();
	}

	public static GameEntity toEntity(GameDto gameDto) {
		return GameEntity.builder()
			.gameTitle(gameDto.getGameTitle())
			.gameSlug(gameDto.getGameSlug())
			.seq(gameDto.getId())
			.develop(gameDto.getDevelop())
			.publish(gameDto.getPublish())
			.createDate(gameDto.getCreateDate())
			.gameTitleImageUrl(gameDto.getGameTitleImageUrl())
			.build();
	}
}
