package com.gechu.game.game.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gechu.game.game.dto.GameResponseDto;
import com.gechu.game.game.service.GameService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/games")
public class GameController {

	private final GameService gameService;

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

	@GetMapping("/slug")
	public ResponseEntity<?> findGameBySlug(@RequestParam("slug") String gameSlug) {

		GameResponseDto gameResponseDto = null;

		try {
			gameResponseDto = gameService.findGameBySlug(gameSlug);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<>(gameResponseDto, HttpStatus.OK);
	}

	@GetMapping("/seq")
	public ResponseEntity<?> findGameBySeq(@RequestParam("seq") Integer seq) {

		GameResponseDto gameResponseDto = null;

		try {
			gameResponseDto = gameService.findGameBySeq(seq);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<>(gameResponseDto, HttpStatus.OK);
	}

}
