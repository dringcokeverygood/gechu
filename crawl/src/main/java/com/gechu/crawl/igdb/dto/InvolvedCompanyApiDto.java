package com.gechu.crawl.igdb.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class InvolvedCompanyApiDto {

	private Long id;
	private Long company;
	private Boolean developer;
	private Boolean porting;
	private Boolean publisher;
	private Boolean supporting;
	private Long game;
}
