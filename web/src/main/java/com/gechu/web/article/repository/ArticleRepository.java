package com.gechu.web.article.repository;

import com.gechu.web.article.entity.ArticleEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<ArticleEntity, Long> {
    List<ArticleEntity> findByUsers_SeqOrderBySeqDesc(Long userSeq);
    List<ArticleEntity> findByGameSeqOrderBySeqDesc(Long gameSeq);
    List<ArticleEntity> findTop10ByOrderByCreateDateDesc();
	List<ArticleEntity> findBySeqIn(List<Long> articleSeqs);
}
