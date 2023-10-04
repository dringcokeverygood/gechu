package com.gechu.web.game.controller;

import com.gechu.web.article.dto.ArticlePreViewDto;
import com.gechu.web.article.service.ArticleService;
import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.estimate.service.EstimateService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/games")
@Slf4j
public class GameController {

	private final EstimateService estimateService;
	private final ArticleService articleService;

	@GetMapping("/{gameSeq}/reviews")
	public ResponseEntity<?> findEstimatesByGameSeq(@PathVariable("gameSeq") Long gameSeq) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;
		try {
			List<EstimateDto> estimatesByGameSeq = estimateService.findEstimatesByGameSeqAndUserLikeNotEquals(gameSeq, "deleted");
			resultMap.put("estimates", estimatesByGameSeq);
			resultMap.put("likeCnt", estimatesByGameSeq.stream().filter(e -> e.getLike().equals("like")).count());
			resultMap.put("dislikeCnt", estimatesByGameSeq.stream().filter(e -> e.getLike().equals("dislike")).count());
			resultMap.put("success", true);
			log.info("{}번 게임의 게임 평가 목록", gameSeq);
			status = HttpStatus.OK;
		} catch (Exception e) {
			log.warn("controller에서 에러 발생!!!");
			resultMap.put("success", false);
			resultMap.put("message", "서버 오류");
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<>(resultMap, status);
	}

	@GetMapping("/{gameSeq}/articles")
	public ResponseEntity<?> findArticlesByGameSeq(@PathVariable("gameSeq") Long gameSeq) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;

		try {
			List<ArticlePreViewDto> articles = articleService.findArticlesByGameSeq(gameSeq);
			resultMap.put("articles", articles);
			resultMap.put("success", true);
			status = HttpStatus.OK;
		} catch (Exception e) {
			log.warn("controller에서 에러 발생!!!");
			status = HttpStatus.BAD_REQUEST;
			resultMap.put("success", false);
		}

		return new ResponseEntity<>(resultMap, status);
	}
}
