package com.gechu.crawl.igdb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.crawl.igdb.entity.GamePlatformEntity;

@Repository
public interface GamePlatformRepository extends JpaRepository<GamePlatformEntity, Long> {
}
