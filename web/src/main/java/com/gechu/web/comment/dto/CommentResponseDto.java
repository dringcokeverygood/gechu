package com.gechu.web.comment.dto;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.gechu.web.user.dto.UserProfileDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter @Service
@NoArgsConstructor @AllArgsConstructor
@Builder
public class CommentResponseDto {

	private Long articleSeq;
	private String content;
	private LocalDateTime createDate;
	private UserProfileDto userProfile;
}
