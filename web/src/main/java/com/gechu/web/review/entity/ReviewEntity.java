package com.gechu.web.review.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.gechu.web.game.entity.EstimateEntity;

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
}
