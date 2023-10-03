package com.gechu.crawl.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gechu.crawl.service.GameServiceClient;
import com.gechu.crawl.util.CrawlMetaCriticAsync;
import com.gechu.crawl.util.WebDriverUtil;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CrawlTestController {

	private final WebDriverUtil webDriverUtil;
	private final GameServiceClient gameServiceClient;
	private final CrawlMetaCriticAsync crawlMetaCriticAsync;

	@GetMapping("/dir")
	public void dir() throws IOException {
		webDriverUtil.checkDirectory();
	}

	// @GetMapping
	// public void test() {
	// 	webDriverUtil.chrome();
	// 	webDriverUtil.crawlMetaCriticUserReviews("the-legend-of-zelda-tears-of-the-kingdom");
	// }

	@GetMapping("/thread")
	public void threadTest(@RequestParam(value = "start", required = false, defaultValue = "0") Integer start,
		@RequestParam(value = "end", required = false, defaultValue = "36603") Integer end) {
		List<String> gameSlugs = gameServiceClient.findGames();
		List<String> parts = new ArrayList<>();

		for (int i = start; i < end; i++) {
			parts.add(gameSlugs.get(i));
		}

		webDriverUtil.multiThreadingJava(parts);
	}

	@GetMapping("/async")
	public void asyncTest(@RequestParam(value = "start", required = false, defaultValue = "0") Integer start,
		@RequestParam(value = "end", required = false, defaultValue = "36603") Integer end) {
		List<String> gameSlugs = gameServiceClient.findGames();
		List<String> parts = new ArrayList<>();

		for (int i = start; i < end; i++) {
			parts.add(gameSlugs.get(i));
		}

		webDriverUtil.multiThreadingSpring(parts);
		// for (String gameSlug : parts) {
		// 	crawlMetaCriticAsync.insertMetaCriticScore(gameSlug);
		// }
	}
}
