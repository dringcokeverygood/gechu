package com.gechu.web.estimate.entity;

import javax.persistence.*;

import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.review.entity.ReviewEntity;
import com.gechu.web.user.entity.UsersEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "estimate")
@Builder
public class EstimateEntity {

	@Id
	@GeneratedValue
	private Long seq;
	private Long gameSeq;
	private String userLike;

	@ManyToOne
	@JoinColumn(name = "user_seq")
	private UsersEntity users;

	@OneToOne(mappedBy = "estimate")
	private ReviewEntity reviewEntity;

	public static EstimateDto toDto(EstimateEntity estimateEntity) {
		if (estimateEntity == null) {
			return null;
		}
		return EstimateDto.builder()
			.seq(estimateEntity.getSeq())
			.userSeq(estimateEntity.getUsers().getSeq())
			.gameSeq(estimateEntity.getGameSeq())
			.like(estimateEntity.getUserLike())
			.build();
	}

	public void updateUserLike(String like) {
		this.userLike = like;
	}
}

