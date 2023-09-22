package com.gechu.web.game.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LikeGameItemDto {

    private Long gameSeq;

    private String gameTitle;

    private String gameTitleImageUrl;

}
