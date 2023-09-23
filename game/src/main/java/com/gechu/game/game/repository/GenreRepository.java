package com.gechu.game.game.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.game.game.entity.GenreEntity;

@Repository
public interface GenreRepository extends JpaRepository<GenreEntity, Long> {
	public GenreEntity findByGenreSlug(String slug);
	public GenreEntity findBySeq(Integer seq);

	public List<GenreEntity> findBySeqIn(List<Integer> seqs);
}
