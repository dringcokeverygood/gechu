package com.gechu.web.article.service;

import com.gechu.web.article.dto.ArticleDto;
import com.gechu.web.article.entity.ArticleEntity;
import com.gechu.web.article.repository.ArticleRepository;
import com.gechu.web.review.entity.ReviewEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService{

    private final ArticleRepository articleRepository;
    @Override
    public ArticleDto findArticle(Long articleSeq) {
        return null;
    }

    @Override
    public void insertArticle(ArticleDto articleDto) {
        articleRepository.save(ArticleEntity.builder().build());
    }
}
