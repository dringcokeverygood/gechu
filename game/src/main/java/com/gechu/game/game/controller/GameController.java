package com.gechu.game.game.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gechu.game.game.dto.GameResponseDto;
import com.gechu.game.game.dto.NewsRequestDto;
import com.gechu.game.game.dto.NewsResponseDto;
import com.gechu.game.game.service.GameService;
import com.gechu.game.game.service.NewsService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/games")
@Slf4j
public class GameController {

	private final GameService gameService;
	private final NewsService newsService;

	@GetMapping("/all")
	public ResponseEntity<?> findAllGameSlugs() {
		List<String> gameSlugs = null;
		try {
			gameSlugs = gameService.findAllGameSlugs();
		} catch (Exception e) {

			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(gameSlugs, HttpStatus.OK);
	}

	@PostMapping("/list/seq")
	public ResponseEntity<?> findGamesBySeqs(@RequestBody List<Integer> seqs) {

		List<GameResponseDto> gameResponseDtos = null;

		try {
			gameResponseDtos = gameService.findAllGamesBySeqIn(seqs);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(gameResponseDtos, HttpStatus.OK);
	}

	@PostMapping("/list/slug")
	public ResponseEntity<?> findGamesBySlugs(@RequestBody List<String> slugs) {

		List<GameResponseDto> gameResponseDtos = null;

		try {
			gameResponseDtos = gameService.findAllGamesBySlugIn(slugs);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(gameResponseDtos, HttpStatus.OK);
	}

	@GetMapping("/slug/{gameSlug}")
	public ResponseEntity<?> findGameBySlug(@PathVariable("gameSlug") String gameSlug) {

		GameResponseDto gameResponseDto = null;

		try {
			gameResponseDto = gameService.findGameDetailBySlug(gameSlug);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<>(gameResponseDto, HttpStatus.OK);
	}

	@GetMapping("/seq/{seq}")
	public ResponseEntity<?> findGameBySeq(@PathVariable("seq") Integer seq) {

		GameResponseDto gameResponseDto = null;

		try {
			gameResponseDto = gameService.findGameDetailBySeq(seq);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<>(gameResponseDto, HttpStatus.OK);
	}

	@GetMapping("/title/{seq}")
	public ResponseEntity<?> findGameTitleBySeq(@PathVariable("seq") Integer seq) {
		GameResponseDto gameResponseDto = null;
		try {
			gameResponseDto = gameService.findGameBySeq(seq);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<>(gameResponseDto, HttpStatus.OK);
	}

	@PostMapping("/critic/{gameSlug}")
	public ResponseEntity<?> insertMetaCriticScore(@PathVariable("gameSlug") String gameSlug, @RequestBody Map<String, Object> map) {
		Integer score = (Integer) map.get("score");
		try {
			gameService.updateMetaCriticScore(gameSlug, score);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(gameSlug, HttpStatus.OK);
	}

	@PostMapping("/news")
	public ResponseEntity<?> insertNews(@RequestBody NewsRequestDto newsRequestDto) {
		try {
			newsService.insertNews(newsRequestDto);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping("/news/{gameSeq}")
	public ResponseEntity<?> findNewsByGameSeq(Integer gameSeq) {
		List<NewsResponseDto> newsResponseDtos = null;
		try {
			newsResponseDtos = newsService.findNewsByGameSeq(gameSeq);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(newsResponseDtos, HttpStatus.OK);
	}

	@GetMapping("/news/random")
	public ResponseEntity<?> findRandomNews(@RequestParam("count") Integer count) {
		List<NewsResponseDto> newsResponseDtos = null;
		try {
			newsResponseDtos = newsService.findNewsByCount(count);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(newsResponseDtos, HttpStatus.OK);
	}


	@GetMapping
	public ResponseEntity<?> findRandomGames() {
		List<GameResponseDto> gameResponseDtos = null;

		List<Integer> randomGames = new ArrayList<>();
		int i = (int) (Math.random() * 266000);
		for (int j = i; j < i + 300; j++) {
			randomGames.add(j);
		}
		log.info("랜덤게임 호출 시작");

		try {
			gameResponseDtos = gameService.findAllGamesBySeqIn(randomGames);
			log.info("랜덤게임 호출: 총 {}개", gameResponseDtos.size());
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(gameResponseDtos, HttpStatus.OK);
	}
}
