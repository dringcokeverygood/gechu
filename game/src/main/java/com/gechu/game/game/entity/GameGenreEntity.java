package com.gechu.game.game.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "game_genre", indexes = {
	@Index(name = "idx_genre_seq", columnList = "genre_seq"),
	@Index(name = "idx_game_seq", columnList = "game_seq")
}, uniqueConstraints={
	@UniqueConstraint(
		name = "game_genre_seq",
		columnNames = {
			"game_seq",
			"genre_seq"
		}
	),
})
@Builder
public class GameGenreEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long seq;

	@Column(name = "game_seq")
	private Integer gameSeq;
	@Column(name = "genre_seq")
	private Integer genreSeq;
}
