package com.gechu.game.game.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.game.game.entity.GamePlatformEntity;

@Repository
public interface GamePlatformRepository extends JpaRepository<GamePlatformEntity, Long> {
	public List<GamePlatformEntity> findByGameSeq(Integer seq);
}
