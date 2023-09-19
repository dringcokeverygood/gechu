package com.gechu.crawl.igdb.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.igdb.exceptions.RequestException;
import com.gechu.crawl.igdb.service.CrawlGameService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CrawlController {

	private final CrawlGameService crawlGameService;

	@GetMapping("/")
	public String test() throws RequestException {
		crawlGameService.crawl(10000000, 10000002, 1);
		return null;
	}
}
