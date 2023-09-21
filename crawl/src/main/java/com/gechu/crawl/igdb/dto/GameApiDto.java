package com.gechu.crawl.igdb.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@Builder
public class GameApiDto {
	private Integer id;
	private String name;
	private String slug;
	private List<Integer> platforms;
	private List<Integer> genres;
	private List<Integer> involved_companies;
	private List<Integer> artworks;
	private List<Integer> release_dates;
}
