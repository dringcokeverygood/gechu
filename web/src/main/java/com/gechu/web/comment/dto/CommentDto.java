package com.gechu.web.comment.dto;

import org.springframework.stereotype.Service;

import com.gechu.web.article.entity.ArticleEntity;
import com.gechu.web.comment.entity.CommentEntity;
import com.gechu.web.user.entity.UsersEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter @Service
@NoArgsConstructor @AllArgsConstructor
@Builder
public class CommentDto {

	private Long seq;
	private Long articleSeq;
	private Long userSeq;
	private String content;

	public static CommentEntity toEntity(CommentDto commentDto) {
		return CommentEntity.builder()
			.users(UsersEntity.builder().seq(commentDto.getUserSeq()).build())
			.article(ArticleEntity.builder().seq(commentDto.getArticleSeq()).build())
			.content(commentDto.getContent())
			.build();
	}
}
