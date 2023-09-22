package com.gechu.game.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.game.game.entity.GameGenreEntity;

@Repository
public interface GameGenreRepository extends JpaRepository<GameGenreEntity, Long> {
}
