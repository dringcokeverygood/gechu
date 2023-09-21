package com.gechu.crawl.igdb.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.igdb.exceptions.RequestException;
import com.gechu.crawl.igdb.service.IgdbApiService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CrawlController {

	private final IgdbApiService igdbApiService;

	@GetMapping("/games")
	public void test() throws RequestException {
		igdbApiService.addGames(0, 270000, 500);
	}

	@GetMapping("/platforms")
	public void setPlatforms() {
		igdbApiService.addPlatforms();
	}

	@GetMapping("/genres")
	public void setGenres() {
		igdbApiService.addGenres();
	}
}
