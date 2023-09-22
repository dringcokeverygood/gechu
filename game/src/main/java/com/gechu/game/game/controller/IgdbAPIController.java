package com.gechu.game.game.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.igdb.exceptions.RequestException;
import com.gechu.game.game.service.IgdbApiService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/igdb")
public class IgdbAPIController {

	private final IgdbApiService igdbApiService;

	@GetMapping("/games")
	public void test(@RequestParam int start, @RequestParam int end, @RequestParam int range) throws RequestException {
		igdbApiService.addGames(start, end, range);
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
