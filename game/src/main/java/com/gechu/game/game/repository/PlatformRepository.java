package com.gechu.game.game.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.game.game.entity.GenreEntity;
import com.gechu.game.game.entity.PlatformEntity;

@Repository
public interface PlatformRepository extends JpaRepository<PlatformEntity, Long> {
	public PlatformEntity findByPlatformSlug(String slug);

	List<PlatformEntity> findBySeqIn(List<Integer> Seqs);
}
