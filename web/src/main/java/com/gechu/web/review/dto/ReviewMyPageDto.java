package com.gechu.web.review.dto;

import lombok.*;

import java.time.LocalDateTime;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReviewMyPageDto {

    private Long gameSeq;
    private String gameTitle;
    private String gameTitleImageUrl;
    private final String type = "reviews";
    private Long itemSeq;   // reviewSeq
    private String title;
    private String content;
    private LocalDateTime createDate;
    private String like;
}
