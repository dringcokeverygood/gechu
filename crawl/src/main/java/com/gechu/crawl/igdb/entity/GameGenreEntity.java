package com.gechu.crawl.igdb.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
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
@Table(name = "game_genre", indexes = {
	@Index(name = "idx_genre_seq", columnList = "genre_seq"),
	@Index(name = "idx_game_seq", columnList = "game_seq")
})
@Builder
public class GameGenreEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long seq;

	@Column(name = "genre_seq")
	private Integer genreSeq;
	@Column(name = "game_seq")
	private Integer gameSeq;
}
