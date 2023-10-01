package com.gechu.web.article.dto;

import com.gechu.web.article.entity.ArticleEntity;

import lombok.*;

import java.time.LocalDateTime;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ArticleMyPageDto {
	private Long gameSeq;
	private String gameTitle;
	private String gameTitleImageUrl;
	private final String type = "articles";
	private Long itemSeq;   // articleSeq
	private String title;
	private String content;
	private LocalDateTime createDate;
	private final String like = null;
}
