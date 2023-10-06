package com.gechu.crawl.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gechu.crawl.service.GameServiceClient;
import com.gechu.crawl.util.CrawlNews;
import com.gechu.crawl.util.WebDriverUtil;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CrawlController {

	private final WebDriverUtil webDriverUtil;
	private final GameServiceClient gameServiceClient;
	private final CrawlNews crawlNews;

	@GetMapping("/thread")
	public void crawlReviews(@RequestParam(value = "start", required = false, defaultValue = "0") Integer start,
		@RequestParam(value = "end", required = false, defaultValue = "36603") Integer end) {
		List<String> gameSlugs = gameServiceClient.findGames();
		List<String> parts = new ArrayList<>();

		for (int i = start; i < end; i++) {
			parts.add(gameSlugs.get(i));
		}

		webDriverUtil.crawlMetaCritic(parts);
	}

	@PostMapping("/news/{gameSlug}")
	public ResponseEntity<?> crawlNews(@PathVariable("gameSlug") String gameSlug) {
		crawlNews.crawlNews(gameSlug);
		return null;
	}
}
