package com.gechu.crawl.game.dto;

import com.gechu.crawl.game.entity.PlatformEntity;

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
public class PlatformApiDto {
	private Integer id;
	private String name;
	private String slug;

	public static PlatformEntity toEntity(PlatformApiDto platformApiDto) {
		return PlatformEntity.builder()
			.seq(platformApiDto.getId())
			.platformName(platformApiDto.getName())
			.platformSlug(platformApiDto.getSlug())
			.build();
	}
}
