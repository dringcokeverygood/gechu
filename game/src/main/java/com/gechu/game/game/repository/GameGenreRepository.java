package com.gechu.game.game.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.game.game.entity.GameGenreEntity;

@Repository
public interface GameGenreRepository extends JpaRepository<GameGenreEntity, Long> {
	List<GameGenreEntity> findByGameSeq(Integer gameSeq);
}
