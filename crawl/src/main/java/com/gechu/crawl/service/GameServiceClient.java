package com.gechu.crawl.service;

import java.util.List;
import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.gechu.crawl.dto.GameResponseDto;

@FeignClient(name = "game", url = "https://j9d203.p.ssafy.io/api/game")
public interface GameServiceClient {

	@GetMapping("/games/all")
	public List<String> findGames();

	@PostMapping("/games/critic/{gameSlug}")
	public String insertMetaCriticScore(@PathVariable("gameSlug") String gameSlug, @RequestBody Map<String, Object> map);
}
