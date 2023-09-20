package com.gechu.crawl.igdb.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "game")
public class GameEntity {

	@Id
	@GeneratedValue
	private Long seq;

	@NotNull
	private String gameTitle;
	@NotNull
	private String gameSlug;
	@NotNull
	private String gameTitleImageUrl;
	private String develop;
	private String publish;
	private LocalDateTime createDate;
	private Integer metaScore;
	private Integer openScore;
	private String steamScore;

	@OneToMany(mappedBy = "gameEntity", cascade = CascadeType.REMOVE)
	List<GameGenreEntity> gameGenreEntityList = new ArrayList<>();

	@OneToMany(mappedBy = "gameEntity", cascade = CascadeType.REMOVE)
	List<GamePlatformEntity> gamePlatformEntityList = new ArrayList<>();

	@OneToMany(mappedBy = "gameEntity", cascade = CascadeType.REMOVE)
	List<NewsEntity> newsEntityList = new ArrayList<>();
}
