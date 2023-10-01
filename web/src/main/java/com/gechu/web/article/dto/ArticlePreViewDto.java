package com.gechu.web.article.dto;

import java.time.LocalDateTime;

import com.gechu.web.article.entity.ArticleEntity;
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
public class ArticlePreViewDto {
	private Long seq;
	private Long gameSeq;
	private UserProfileDto userProfile;
	private String articleTitle;
	private String imageUrl;
	private Integer commentCount;
	private LocalDateTime createDate;
}
