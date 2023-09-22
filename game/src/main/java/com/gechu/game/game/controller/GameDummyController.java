package com.gechu.game.game.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gechu.game.game.dto.GameResponseDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("dummy/games")
public class GameDummyController {

	@GetMapping
	public ResponseEntity<?> findGames(@RequestParam(required = false) int[] platforms, @RequestParam(required = false) int[] genres) {

		List<String> genreDummies = new ArrayList<>();
		genreDummies.add("puzzle");
		genreDummies.add("music");
		List<String> platformDummies = new ArrayList<>();
		platformDummies.add("switch");
		platformDummies.add("ps5");
		platformDummies.add("win");

		List<GameResponseDto> gameResponseDtos = new ArrayList<>();
		gameResponseDtos.add(GameResponseDto.builder()
			.gameTitle("Test King: tears of the test")
			.gameSlug("test-king-tears-of-the-test")
			.gameTitleImageUrl(
				"https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg")
			.seq(1)
			.publish("LeeChanHeeCompany")
			.genres(genreDummies)
			.develop("LeeChanHeeCompany")
			.platforms(platformDummies)
			.createDate(LocalDateTime.now())
			.build());

		genreDummies.clear();
		genreDummies.add("fighting");
		genreDummies.add("simulator");
		platformDummies.clear();
		platformDummies.add("ps5");
		platformDummies.add("win");

		gameResponseDtos.add(GameResponseDto.builder()
			.gameTitle("Fuck SSAFY: I HATE SSAFY 2")
			.gameSlug("fuck-ssafy-i-hate-ssafy-2")
			.gameTitleImageUrl(
				"https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FchrwPO%2FbtrVXB55DRp%2FKsqZwm2qHtBP9sRr5kcXTK%2Fimg.png")
			.seq(2)
			.publish("SSAFY")
			.genres(genreDummies)
			.develop("SAMSUNG")
			.platforms(platformDummies)
			.createDate(LocalDateTime.now())
			.build());

		return new ResponseEntity<>(gameResponseDtos, HttpStatus.OK);
	}

	@GetMapping("/slug")
	public ResponseEntity<?> findGame(@RequestParam("slug") String gameSlug) {
		List<String> genreDummies = new ArrayList<>();
		genreDummies.add("puzzle");
		genreDummies.add("music");
		List<String> platformDummies = new ArrayList<>();
		platformDummies.add("switch");
		platformDummies.add("ps5");
		platformDummies.add("win");

		GameResponseDto gameResponseDto = GameResponseDto.builder()
			.gameTitle(gameSlug)
			.gameSlug(gameSlug)
			.gameTitleImageUrl(
				"https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg")
			.seq(1)
			.publish("LeeChanHeeCompany")
			.genres(genreDummies)
			.develop("LeeChanHeeCompany")
			.platforms(platformDummies)
			.createDate(LocalDateTime.now())
			.build();

		return new ResponseEntity<>(gameResponseDto, HttpStatus.OK);
	}
	@GetMapping("/seq")
	public ResponseEntity<?> findGame(@RequestParam("seq") Integer gameSeq) {
		List<String> genreDummies = new ArrayList<>();
		genreDummies.add("puzzle");
		genreDummies.add("music");
		List<String> platformDummies = new ArrayList<>();
		platformDummies.add("switch");
		platformDummies.add("ps5");
		platformDummies.add("win");

		GameResponseDto gameResponseDto = GameResponseDto.builder()
			.gameTitle("Test King: tears of the test")
			.gameSlug("test-king-tears-of-the-test")
			.gameTitleImageUrl(
				"https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg")
			.seq(gameSeq)
			.publish("LeeChanHeeCompany")
			.genres(genreDummies)
			.develop("LeeChanHeeCompany")
			.platforms(platformDummies)
			.createDate(LocalDateTime.now())
			.build();

		return new ResponseEntity<>(gameResponseDto, HttpStatus.OK);
	}

}
