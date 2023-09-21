package com.gechu.web.game.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.gechu.web.review.entity.ReviewEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "estimate")
@Builder
public class EstimateEntity {

	@Id
	@GeneratedValue
	private Long seq;
	private Long userSeq;
	private Integer gameSeq;
	private String like;
}
