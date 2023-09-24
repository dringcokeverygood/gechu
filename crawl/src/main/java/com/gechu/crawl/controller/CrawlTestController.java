package com.gechu.crawl.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gechu.crawl.util.WebDriverUtil;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CrawlTestController {

	private final WebDriverUtil webDriverUtil;

	@GetMapping
	public void test() {
		webDriverUtil.chrome();
		webDriverUtil.crawlMetaCriticUserReviews("the-legend-of-zelda-tears-of-the-kingdom");
	}

	@GetMapping("/thread")
	public void threadTest() {
		webDriverUtil.multiThreading();
	}
}
