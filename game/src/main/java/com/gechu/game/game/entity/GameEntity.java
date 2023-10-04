package com.gechu.game.game.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.data.domain.Persistable;

import com.gechu.game.game.dto.GameResponseDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "game", indexes = {
	@Index(name = "idx_game_slug", columnList = "game_slug")
})
public class GameEntity implements Persistable<Integer> {

	@Id
	private Integer seq;

	@NotNull
	private String gameTitle;
	@NotNull
	@Column(name = "game_slug")
	private String gameSlug;
	@NotNull
	private String gameTitleImageUrl;
	private String develop;
	private String publish;
	private LocalDateTime createDate;
	private Integer metaScore;

	@OneToMany(mappedBy = "gameEntity", cascade = CascadeType.REMOVE)
	List<NewsEntity> newsEntityList = new ArrayList<>();

	@Builder
	public GameEntity(Integer seq, String gameTitle, String gameSlug, String gameTitleImageUrl, String develop,
		String publish, LocalDateTime createDate, Integer metaScore) {
		this.seq = seq;
		this.gameTitle = gameTitle;
		this.gameSlug = gameSlug;
		this.gameTitleImageUrl = gameTitleImageUrl;
		this.develop = develop;
		this.publish = publish;
		this.createDate = createDate;
		this.metaScore = metaScore;
	}

	@Override
	public Integer getId() {
		return this.seq;
	}

	@Override
	public boolean isNew() {
		return true;
	}


	// public static GameResponseDto toDtoUser(GameEntity gameEntity) {
	// 	return GameResponseDto.builder()
	// 		.gameTitle(gameEntity.getGameTitle())
	// 		.gameSlug(gameEntity.getGameSlug())
	// 		.seq(gameEntity.getSeq())
	// 		.gameTitleImageUrl(gameEntity.getGameTitleImageUrl())
	// 		.build();
	// }

	public static GameResponseDto toDtoDetail(GameEntity gameEntity) {
		return GameResponseDto.builder()
			.gameTitle(gameEntity.getGameTitle())
			.gameSlug(gameEntity.getGameSlug())
			.seq(gameEntity.getSeq())
			.createDate(gameEntity.getCreateDate())
			.gameTitleImageUrl(gameEntity.getGameTitleImageUrl())
			.develop(gameEntity.getDevelop())
			.publish(gameEntity.getPublish())
			.metaScore(gameEntity.getMetaScore())
			.build();
	}

	public void updateMetaCriticScore(Integer score) {
		this.metaScore = score;
	}
}
