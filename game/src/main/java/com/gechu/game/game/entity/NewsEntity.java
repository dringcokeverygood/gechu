package com.gechu.game.game.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.gechu.game.game.dto.NewsResponseDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "news")
@Builder
public class NewsEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long seq;

	@NotNull
	private String headline;
	@NotNull
	private String url;
	@NotNull
	private String content;
	private String imageUrl;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "game_seq")
	private GameEntity game;

	public static NewsResponseDto toResponseDto(NewsEntity newsEntity) {
		return NewsResponseDto.builder()
			.gameSeq(newsEntity.getGame().getSeq())
			.gameSlug(newsEntity.getGame().getGameSlug())
			.content(newsEntity.getContent())
			.headline(newsEntity.getHeadline())
			.imageUrl(newsEntity.getImageUrl())
			.url(newsEntity.getUrl())
			.build();
	}
}
