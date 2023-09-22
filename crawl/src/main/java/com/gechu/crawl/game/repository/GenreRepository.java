package com.gechu.crawl.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.crawl.game.entity.GenreEntity;

@Repository
public interface GenreRepository extends JpaRepository<GenreEntity, Long> {
	public GenreEntity findByGenreSlug(String slug);
}
