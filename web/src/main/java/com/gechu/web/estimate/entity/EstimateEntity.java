package com.gechu.web.estimate.entity;

import javax.persistence.*;

import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.review.dto.ReviewResponseDto;
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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long seq;
	private Long gameSeq;
	private String userLike;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_seq")
	private UsersEntity users;

	@OneToOne(mappedBy = "estimate", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "estimate_seq")
	private ReviewEntity reviewEntity;

	public static EstimateDto toDto(EstimateEntity estimateEntity) {
		if (estimateEntity == null) {
			return null;
		}
		if (estimateEntity.getReviewEntity() != null) {
			ReviewEntity reviewEntity = estimateEntity.getReviewEntity();
			return EstimateDto.builder()
				.seq(estimateEntity.getSeq())
				.userSeq(estimateEntity.getUsers().getSeq())
				.gameSeq(estimateEntity.getGameSeq())
				.reviewSeq(reviewEntity.getSeq())
				.reviewText(reviewEntity.getText())
				.reviewDate(reviewEntity.getCreateDate())
				.like(estimateEntity.getUserLike())
				.build();
		}
		return EstimateDto.builder()
			.seq(estimateEntity.getSeq())
			.userSeq(estimateEntity.getUsers().getSeq())
			.gameSeq(estimateEntity.getGameSeq())
			.like(estimateEntity.getUserLike())
			.build();
	}

	public static ReviewResponseDto toReviewResponseDto(EstimateEntity estimateEntity) {
		return ReviewResponseDto.builder()
			.userProfile(UsersEntity.toProfileDto(estimateEntity.getUsers()))
			.estimateSeq(estimateEntity.getSeq())
			.like(estimateEntity.getUserLike())
			.content(estimateEntity.getReviewEntity().getText())
			.createDate(estimateEntity.getReviewEntity().getCreateDate())
			.reviewSeq(estimateEntity.getReviewEntity().getSeq())
			.build();
	}

	public void updateUserLike(String like) {
		this.userLike = like;
	}
}

