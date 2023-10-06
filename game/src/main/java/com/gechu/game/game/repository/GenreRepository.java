package com.gechu.game.game.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gechu.game.game.entity.GenreEntity;

@Repository
public interface GenreRepository extends JpaRepository<GenreEntity, Long> {
	public GenreEntity findByGenreSlug(String slug);

	public GenreEntity findBySeq(Integer seq);

	@Query("SELECT g FROM GenreEntity g "
		+ "JOIN GameGenreEntity gg ON g.seq = gg.genreSeq "
		+ "WHERE gg.gameSeq = :gameSeq")
	List<GenreEntity> findGenresByGameSeq(@Param("gameSeq") Integer gameSeq);
}
