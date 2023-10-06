package com.gechu.game.game.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gechu.game.game.entity.PlatformEntity;

@Repository
public interface PlatformRepository extends JpaRepository<PlatformEntity, Long> {
	public PlatformEntity findByPlatformSlug(String slug);

	List<PlatformEntity> findBySeqIn(List<Integer> Seqs);

	@Query("SELECT p FROM PlatformEntity p "
		+ "JOIN GamePlatformEntity pg ON p.seq = pg.platformSeq "
		+ "WHERE pg.gameSeq = :gameSeq")
	List<PlatformEntity> findPlatformsByGameSeq(@Param("gameSeq") Integer gameSeq);
}
