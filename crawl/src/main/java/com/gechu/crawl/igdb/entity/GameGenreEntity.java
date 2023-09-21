package com.gechu.crawl.igdb.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "game_genre")
public class GameGenreEntity {

	@Id
	@GeneratedValue
	private Long seq;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "genre_seq")
	private GenreEntity genreEntity;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "game_seq")
	private GameEntity gameEntity;
}
