package com.gechu.game.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.game.game.entity.GenreEntity;

@Repository
public interface GenreRepository extends JpaRepository<GenreEntity, Long> {
	public GenreEntity findByGenreSlug(String slug);
}
