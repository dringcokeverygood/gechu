package com.gechu.crawl.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.crawl.game.entity.GameEntity;

@Repository
public interface GameRepository extends JpaRepository<GameEntity, Long> {
}
