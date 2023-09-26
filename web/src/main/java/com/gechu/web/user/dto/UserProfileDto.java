package com.gechu.web.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class UserProfileDto {
	private Long seq;
	private String userId;
	private String nickName;
	private String imageUrl;
}
