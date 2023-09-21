package com.gechu.web.review.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.gechu.web.game.entity.EstimateEntity;

import com.gechu.web.review.dto.ReviewDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "review")
@Builder
public class ReviewEntity {

	@Id
	@GeneratedValue
	private Long seq;
	private String text;
	private Long estimateSeq;

	public ReviewDto toDto(ReviewEntity reviewEntity) {
		if(reviewEntity == null) {
			return null;
		}
		return ReviewDto.builder()
				.seq(reviewEntity.getSeq())
				.text(reviewEntity.getText())
				.estimateSeq(reviewEntity.getEstimateSeq())
				.build();
	}
}
