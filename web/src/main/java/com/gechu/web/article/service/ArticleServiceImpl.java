package com.gechu.web.article.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gechu.web.article.dto.ArticleDto;
import com.gechu.web.article.dto.ArticleMyPageDto;
import com.gechu.web.article.dto.ArticlePreViewDto;
import com.gechu.web.article.entity.ArticleEntity;
import com.gechu.web.article.repository.ArticleRepository;
import com.gechu.web.estimate.entity.EstimateEntity;
import com.gechu.web.review.dto.ReviewDto;
import com.gechu.web.review.entity.ReviewEntity;

import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ArticleServiceImpl implements ArticleService {

	private final ArticleRepository articleRepository;

	ObjectMapper objectMapper = new ObjectMapper();
	private final Logger logger = LoggerFactory.getLogger(this.getClass().getSimpleName());

	@Override
	public ArticleDto findArticle(Long articleSeq) {
		ArticleEntity articleEntity = articleRepository.findById(articleSeq).orElseThrow(() -> {
			throw new IllegalStateException("게시글 정보를 찾을 수 없습니다, 게시글 번호: " + articleSeq);
		});

		return ArticleEntity.toDto(articleEntity);
	}

	@Override
	public List<ArticlePreViewDto> findArticlesBySeq(List<Long> articleSeqs) {
		List<ArticleEntity> articleEntities = articleRepository.findBySeqIn(articleSeqs);
		List<ArticlePreViewDto> dto = null;
		try {
			dto = articleEntities.stream().filter(a -> {
				if (a.getDeleted() == null) return true;
				return a.getDeleted().equals("false");
			}).map(ArticleEntity::toPreviewDto).collect(Collectors.toList());
		} catch (Exception e) {
			log.warn("서비스 안에서 에러 발생");
			e.printStackTrace();
		}
		return dto;
	}

	@Override
	public Long insertArticle(ArticleDto articleDto) {
		ArticleEntity articleEntity = articleRepository.save(ArticleDto.toEntity(articleDto));

		Map<String, Object> logMap = new HashMap<>();
		logMap.put("content", articleEntity.getArticleTitle() + " " + articleEntity.getArticleContent());
		logMap.put("seq", articleEntity.getSeq());

		try {
			String logJson = objectMapper.writeValueAsString(logMap);
			logger.info(logJson);
		} catch (Exception e) {
			logger.error("Error converting log message to JSON", e);
		}

		return articleEntity.getSeq();
	}

	@Override
	public List<ArticlePreViewDto> findArticlesByGameSeq(Long gameSeq) {
		List<ArticleEntity> articleEntities = articleRepository.findByGameSeq(gameSeq);
		List<ArticlePreViewDto> dto = null;
		try {
			dto = articleEntities.stream().filter(a -> {
				if (a.getDeleted() == null) return true;
				return a.getDeleted().equals("false");
			}).map(ArticleEntity::toPreviewDto).collect(Collectors.toList());
		} catch (Exception e) {
			log.warn("서비스 안에서 에러 발생");
			e.printStackTrace();
		}
		return dto;
	}

	@Override
	public List<ArticleMyPageDto> findArticlesByUserSeq(Long userSeq) {
		List<ArticleEntity> articleEntities = articleRepository.findByUsers_Seq(userSeq);

		return articleEntities.stream().filter(a -> {
			if (a.getDeleted() == null) return true;
			return a.getDeleted().equals("false");
		}).map(ArticleEntity::toMyPageDto).collect(Collectors.toList());
	}

	@Override
	@Transactional
	public Long updateArticle(ArticleDto articleDto) {
		ArticleEntity articleEntity = articleRepository.findById(articleDto.getSeq()).orElseThrow(() -> new IllegalArgumentException(
			"데이터를 찾을 수 없습니다: " + articleDto.getSeq()));
		articleEntity.updateArticle(articleDto.getArticleTitle(), articleDto.getContent());
		return articleDto.getSeq();
	}

	@Override
	@Transactional
	public Long deleteArticle(Long articleSeq) {
		ArticleEntity articleEntity = articleRepository.findById(articleSeq).orElseThrow(() -> new IllegalArgumentException(
			"데이터를 찾을 수 없습니다: " + articleSeq));
		articleEntity.delete();
		return articleSeq;
	}

	@Override
	public List<ArticleDto> findRecentArticles() {
		List<ArticleEntity> articleEntities = articleRepository.findTop4ByOrderByCreateDateDesc();
		return articleEntities.stream().filter(a -> {
			if (a.getDeleted() == null) return true;
			return a.getDeleted().equals("false");
		}).map(ArticleEntity::toDto).collect(Collectors.toList());
	}
}
