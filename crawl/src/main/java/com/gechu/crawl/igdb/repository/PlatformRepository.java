package com.gechu.crawl.igdb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gechu.crawl.igdb.entity.PlatformEntity;

@Repository
public interface PlatformRepository extends JpaRepository<PlatformEntity, Long> {
}
