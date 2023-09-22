package com.gechu.crawl.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.crawl.game.entity.GamePlatformEntity;

@Repository
public interface GamePlatformRepository extends JpaRepository<GamePlatformEntity, Long> {
}
