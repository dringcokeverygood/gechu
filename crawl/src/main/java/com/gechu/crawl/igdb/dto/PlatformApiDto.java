package com.gechu.crawl.igdb.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@Builder
public class PlatformApiDto {
	private Integer id;
	private String name;
	private String slug;
}