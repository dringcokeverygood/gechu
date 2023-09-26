package com.gechu.web.article.repository;

import com.gechu.web.article.entity.ArticleEntity;
import com.gechu.web.user.entity.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<ArticleEntity, Long> {
    List<ArticleEntity> findByUsers_Seq(Long userSeq);
}
