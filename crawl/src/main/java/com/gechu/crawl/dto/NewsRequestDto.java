package com.gechu.crawl.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class NewsRequestDto {
	private String headline;
	private String content;
	private String url;
	private String imageUrl;
	private String gameSlug;
}
