package com.gechu.crawl.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.crawl.game.entity.GameGenreEntity;

@Repository
public interface GameGenreRepository extends JpaRepository<GameGenreEntity, Long> {
}
