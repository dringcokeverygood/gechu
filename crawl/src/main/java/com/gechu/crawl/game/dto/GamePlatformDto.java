package com.gechu.crawl.game.dto;

import com.gechu.crawl.game.entity.GamePlatformEntity;

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
public class GamePlatformDto {
	private Integer gameSeq;
	private Integer platformSeq;

	public static GamePlatformEntity toEntity(GamePlatformDto gamePlatformDto) {
		return GamePlatformEntity.builder()
			.gameSeq(gamePlatformDto.getGameSeq())
			.platformSeq(gamePlatformDto.getPlatformSeq())
			.build();
	}
}
