package com.gechu.game.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.game.game.entity.PlatformEntity;

@Repository
public interface PlatformRepository extends JpaRepository<PlatformEntity, Long> {
	public PlatformEntity findByPlatformSlug(String slug);
}
