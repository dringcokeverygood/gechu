package com.gechu.web.review.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewMyPageDto {

    private Long gameSeq;
    private String gameTitle;
    private String gameTitleImageUrl;
    private final String type = "reviews";
    private Long itemSeq;   // reviewSeq
    private String title;
    private String content;
    private String createDate;
    private String like;
}
