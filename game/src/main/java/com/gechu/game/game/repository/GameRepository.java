package com.gechu.game.game.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.game.game.entity.GameEntity;

@Repository
public interface GameRepository extends JpaRepository<GameEntity, Long> {
	List<GameEntity> findAllBySeqIn(List<Integer> seqs);
	List<GameEntity> findAllByGameSlugIn(List<String> slugs);
	GameEntity findBySeq(Integer seq);

	GameEntity findByGameSlug(String gameSlug);
}
