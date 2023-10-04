package com.gechu.web.article.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import com.gechu.web.article.dto.ArticleDto;
import com.gechu.web.article.dto.ArticleMyPageDto;
import com.gechu.web.article.dto.ArticlePreViewDto;
import com.gechu.web.article.entity.ArticleEntity;
import com.gechu.web.article.repository.ArticleRepository;
import com.gechu.web.review.entity.ReviewEntity;

import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
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
		log.info("service -> {}", articleEntities.get(0).getArticleTitle());
		log.info("service users -> {}", articleEntities.get(0).getUsers().getSeq());
		return articleEntities.stream().filter(a -> a.getDeleted().equals("false")).map(ArticleEntity::toPreviewDto).collect(Collectors.toList());
	}

	@Override
	public List<ArticleMyPageDto> findArticlesByUserSeq(Long userSeq) {
		List<ArticleEntity> articleEntities = articleRepository.findByUsers_Seq(userSeq);

		return articleEntities.stream().filter(a -> a.getDeleted().equals("false")).map(ArticleEntity::toMyPageDto).collect(Collectors.toList());
	}

	@Override
	@Transactional
	public Long updateArticle(ArticleDto articleDto) {
		ArticleEntity articleEntity = articleRepository.findById(articleDto.getSeq()).orElseThrow(() -> {
			throw new IllegalArgumentException("데이터를 찾을 수 없습니다: " + articleDto.getSeq());
		});
		articleEntity.updateArticle(articleDto.getArticleTitle(), articleDto.getContent());
		return articleDto.getSeq();
	}

	@Override
	@Transactional
	public Long deleteArticle(Long articleSeq) {
		ArticleEntity articleEntity = articleRepository.findById(articleSeq).orElseThrow(() -> {
			throw new IllegalArgumentException("데이터를 찾을 수 없습니다: " + articleSeq);
		});
		articleEntity.delete();
		return articleSeq;
	}

	@Override
	public List<ArticleDto> findRecentArticles() {
		List<ArticleEntity> articleEntities = articleRepository.findTop4ByOrderByCreateDateDesc();
		return articleEntities.stream().map(ArticleEntity::toDto).collect(Collectors.toList());
	}
}
