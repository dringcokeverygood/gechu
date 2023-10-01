package com.gechu.web.article.service;

import java.util.List;

import com.gechu.web.article.dto.ArticleDto;
import com.gechu.web.article.dto.ArticleMyPageDto;
import com.gechu.web.article.dto.ArticlePreViewDto;

import org.springframework.stereotype.Service;

@Service
public interface ArticleService {
    public ArticleDto findArticle(Long articleSeq);
    public Long insertArticle(ArticleDto articleDto);
    public List<ArticlePreViewDto> findArticlesByGameSeq(Long gameSeq);
    public List<ArticleMyPageDto> findArticlesByUserSeq(Long userSeq);
    public Long updateArticle(ArticleDto articleDto);
    public Long deleteArticle(Long articleSeq);
	public List<ArticleDto> findRecentArticles();
}
