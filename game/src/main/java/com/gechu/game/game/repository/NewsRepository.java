package com.gechu.game.game.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gechu.game.game.entity.NewsEntity;

@Repository
public interface NewsRepository extends JpaRepository<NewsEntity, Long> {

	List<NewsEntity> findByGame_Seq(Integer gameSeq);

	@Query(value = "SELECT * FROM news ORDER BY RAND() LIMIT :count", nativeQuery = true)
	List<NewsEntity> findRandomEntities(int count);
}
