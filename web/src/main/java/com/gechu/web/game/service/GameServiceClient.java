package com.gechu.web.game.service;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.gechu.web.game.dto.GameResponseDto;

@FeignClient(name = "game", url = "https://j9d203.p.ssafy.io/api/game")
public interface GameServiceClient {

	@GetMapping("/games")
	public List<GameResponseDto> findGames();

	@PostMapping("/games/list/seq")
	public List<GameResponseDto> findGamesBySeqs(List<Integer> seqs);

	@PostMapping("/games/list/slug")
	public List<GameResponseDto> findGamesBySlugs(List<String> slugs);

	@GetMapping("/games/slug/{gameSlug}")
	public GameResponseDto findGameBySlug(@PathVariable("gameSlug") String gameSlug);

	@GetMapping("/games/seq/{gameSeq}")
	public GameResponseDto findGameBySeq(@PathVariable("gameSeq") Integer gameSeq);

	@GetMapping("/games/title/{gameSeq}")
	public GameResponseDto findGameTitleBySeq(@PathVariable("gameSeq") Integer gameSeq);
}
