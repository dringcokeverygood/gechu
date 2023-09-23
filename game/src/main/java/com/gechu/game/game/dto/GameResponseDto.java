package com.gechu.game.game.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@Builder
public class GameResponseDto {
	private Integer seq;
	private String gameTitle;
	private String gameSlug;
	private String gameTitleImageUrl;
	private String develop;
	private String publish;
	private LocalDateTime createDate;
	private Integer metaScore;
	private Integer openScore;
	private String steamScore;
	private List<String> platforms;
	private List<String> genres;
}
