package com.gechu.web.review.dto;

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
public class ReviewResponseDto {
	private UserProfileDto userProfile;
	private Long estimateSeq;
	private Long reviewSeq;
	private String content;
	private String like;
	private LocalDateTime createDate;

}
