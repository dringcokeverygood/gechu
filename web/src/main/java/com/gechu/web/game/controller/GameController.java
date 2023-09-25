package com.gechu.web.game.controller;

import com.gechu.web.game.dto.GameDetailDto;
import com.gechu.web.game.service.GameService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/game-detail")
public class GameController {

	@Autowired
	GameService gameService;

	@GetMapping("/{gameSeq}")
	public ResponseEntity<?> findGameDetails(@PathVariable Long gameSeq) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;
		try {

			GameDetailDto dummy = new GameDetailDto(gameSeq, gameSeq.toString() + "번 게임",
				"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
				"Capcom", "Capcom", "PC,Xbox", "액션,RPG", "2023-09-22", 80, 85, "스팀평가");
			resultMap.put("gameInfo", dummy);

			//서비스호출
			//        GameDetailDto gameDetail = gameService.findGameDetails(gameSeq);
			status = HttpStatus.OK;
			resultMap.put("message", "success");
		} catch (Exception e) {
			e.printStackTrace();
			status = HttpStatus.BAD_REQUEST;
			resultMap.put("message", "fail");
		}
		return new ResponseEntity<>(resultMap, status);
	}

	@GetMapping("/{gameSeq}/reviews")
	public ResponseEntity<?> findGameReviews(@PathVariable Long gameSeq) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;

		try {
			//리뷰dto리스트와 estimateRate{likeCnt, dislikeCnt} 필요
			status = HttpStatus.OK;
		} catch (Exception e) {
			e.printStackTrace();
			status = HttpStatus.BAD_REQUEST;
			resultMap.put("message", "fail");
		}

		return new ResponseEntity<>(resultMap, status);
	}

	@GetMapping("/{gameSeq}/articles")
	public ResponseEntity<?> findGameArticles(@PathVariable Long gameSeq) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;

		try {
			//gameSeq에 해당하는 게시글 리스트
			status = HttpStatus.OK;
		} catch (Exception e) {
			e.printStackTrace();
			status = HttpStatus.BAD_REQUEST;
			resultMap.put("message", "fail");
		}

		return new ResponseEntity<>(resultMap, status);
	}
}
