package com.gechu.web.game.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GameDetailDto {
    private Long seq;
    private String gameTitle;
    private String gameTitleImageUrl;
    private String develop;
    private String publish;
    private String platform;
    private String genre;
    private String createDate;
    private Integer metaScore;
    private Integer openScore;
    private String steamScore;
}