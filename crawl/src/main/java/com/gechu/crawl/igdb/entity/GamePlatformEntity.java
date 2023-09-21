package com.gechu.crawl.igdb.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "game_platform")
@Builder
public class GamePlatformEntity {

	@Id
	@GeneratedValue
	private Long seq;

	private Integer gameSeq;
	private Integer platformSeq;
}
