package com.gechu.web.article.service;

import java.util.List;
import java.util.stream.Collectors;

import com.gechu.web.article.dto.ArticleDto;
import com.gechu.web.article.dto.ArticlePreViewDto;
import com.gechu.web.article.entity.ArticleEntity;
import com.gechu.web.article.repository.ArticleRepository;
import com.gechu.web.review.entity.ReviewEntity;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {

	private final ArticleRepository articleRepository;

	@Override
	public ArticleDto findArticle(Long articleSeq) {
		ArticleEntity articleEntity = articleRepository.findById(articleSeq).orElseThrow(() -> {
			throw new IllegalStateException("게시글 정보를 찾을 수 없습니다, 게시글 번호: " + articleSeq);
		});

		return ArticleEntity.toDto(articleEntity);
	}

	@Override
	public Long insertArticle(ArticleDto articleDto) {
		ArticleEntity articleEntity = articleRepository.save(ArticleDto.toEntity(articleDto));
		return articleEntity.getSeq();
	}

	@Override
	public List<ArticlePreViewDto> findArticlesByGameSeq(Long gameSeq) {
		List<ArticleEntity> articleEntities = articleRepository.findByGameSeq(gameSeq);

		return articleEntities.stream().filter(a -> a.getDeleted().equals("true")).map(ArticleEntity::toPreviewDto).collect(Collectors.toList());
	}
}
