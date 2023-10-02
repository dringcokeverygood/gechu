package com.gechu.crawl.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.gechu.crawl.dto.GameResponseDto;
import com.gechu.crawl.service.GameServiceClient;
import com.gechu.crawl.util.WebDriverUtil;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CrawlTestController {

	private final WebDriverUtil webDriverUtil;
	private final GameServiceClient gameServiceClient;

	@GetMapping("/dir")
	public void dir() throws IOException {
		webDriverUtil.checkDirectory();
	}


	@GetMapping
	public void test() {
		webDriverUtil.chrome();
		webDriverUtil.crawlMetaCriticUserReviews("the-legend-of-zelda-tears-of-the-kingdom");
	}

	// @GetMapping("/thread")
	// public void threadTest() {
	// 	webDriverUtil.multiThreading("");
	// }

	@GetMapping("/async")
	public void asyncTest(@RequestParam(value = "start", required = false, defaultValue = "0") Integer start,
		@RequestParam(value = "end", required = false, defaultValue = "36603") Integer end) {
		List<GameResponseDto> games = gameServiceClient.findGames();
		List<String> gameSlugs = games.stream().map(GameResponseDto::getGameSlug).collect(Collectors.toList());
		List<String> parts = new ArrayList<>();

		for (int i = start; i < end; i++) {
			parts.add(gameSlugs.get(i));
		}

		webDriverUtil.multiThreading(parts);
	}
}
