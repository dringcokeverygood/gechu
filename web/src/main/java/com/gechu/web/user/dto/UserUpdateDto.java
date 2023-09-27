package com.gechu.web.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class UserUpdateDto {
	private Long userSeq;
	private String nickname;
	private String imageUrl;
}
