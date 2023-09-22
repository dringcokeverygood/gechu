package com.gechu.crawl.game.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.igdb.exceptions.RequestException;
import com.gechu.crawl.game.service.IgdbApiService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class IgdbAPIController {

	private final IgdbApiService igdbApiService;

	@GetMapping("/igdb/games")
	public void test(@RequestParam int start, @RequestParam int end, @RequestParam int range) throws RequestException {
		igdbApiService.addGames(start, end, range);
	}

	@GetMapping("/igdb/platforms")
	public void setPlatforms() {
		igdbApiService.addPlatforms();
	}

	@GetMapping("/igdb/genres")
	public void setGenres() {
		igdbApiService.addGenres();
	}
}
