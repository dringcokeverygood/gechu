package com.gechu.web.article.dto;

import com.gechu.web.article.entity.ArticleEntity;
import com.gechu.web.user.dto.UserProfileDto;
import com.gechu.web.user.entity.UsersEntity;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ArticleDto {

	private Long seq;
	private Long gameSeq;
	private UserProfileDto userProfile;
	private String articleTitle;
	private String content;
	private String imageUrl;
	private Integer commentCount;
	private LocalDateTime createDate;

	public static ArticleEntity toEntity(ArticleDto articleDto) {
		if (articleDto == null)
			return null;
		return ArticleEntity.builder()
			.gameSeq(articleDto.getGameSeq())
			.articleTitle(articleDto.getArticleTitle())
			.articleContent(articleDto.getContent())
			.imageUrl(articleDto.getImageUrl())
			.createDate(articleDto.getCreateDate())
			.users(UsersEntity.builder().seq(articleDto.getUserProfile().getSeq()).build())
			.build();

	}
}
