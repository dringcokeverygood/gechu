package com.gechu.web.article.dto;

import java.time.LocalDateTime;

import com.gechu.web.user.dto.UserProfileDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ArticleRequestDto {
	private Long gameSeq;
	private Long userSeq;
	private String articleTitle;
	private String content;

	public static ArticleDto toArticleDto(ArticleRequestDto articleRequestDto) {
		return ArticleDto.builder()
			.gameSeq(articleRequestDto.getGameSeq())
			.content(articleRequestDto.getContent())
			.articleTitle(articleRequestDto.getArticleTitle())
			.userProfile(UserProfileDto.builder().seq(articleRequestDto.getUserSeq()).build())
			.build();
	}
}
