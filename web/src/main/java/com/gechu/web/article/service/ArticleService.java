package com.gechu.web.article.service;

import com.gechu.web.article.dto.ArticleDto;
import org.springframework.stereotype.Service;

@Service
public interface ArticleService {
    public ArticleDto findArticle(Long articleSeq);
}
