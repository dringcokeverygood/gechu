package com.gechu.crawl.igdb.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import proto.Genre;
import proto.InvolvedCompany;
import proto.Keyword;
import proto.Platform;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@Builder
public class GameDto {
	private Integer id;
	private String name;
	private List<Integer> platforms;
	private List<Integer> genres;
	private List<Integer> keywords;
	private List<Integer> involved_companies;
	private List<Integer> artworks;
	private List<Integer> release_dates;
}
