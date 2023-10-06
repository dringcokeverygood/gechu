package com.gechu.game.game.dto;

import com.gechu.game.game.entity.PlatformEntity;

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
public class PlatformDto {
	private Integer seq;
	private String platformName;
	private String platformSlug;

	public static PlatformEntity toEntity(PlatformDto platformDto) {
		return PlatformEntity.builder()
			.seq(platformDto.getSeq())
			.platformName(platformDto.getPlatformName())
			.platformSlug(platformDto.getPlatformSlug())
			.build();
	}
}
