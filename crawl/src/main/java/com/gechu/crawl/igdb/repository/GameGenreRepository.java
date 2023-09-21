package com.gechu.crawl.igdb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.crawl.igdb.entity.GameGenreEntity;

@Repository
public interface GameGenreRepository extends JpaRepository<GameGenreEntity, Long> {
}
