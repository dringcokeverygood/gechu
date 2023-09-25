package com.gechu.web.game.service;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import com.gechu.web.game.dto.GameResponseDto;

@FeignClient(name = "game")
public interface GameServiceClient {

	@GetMapping("/game/games")
	public List<GameResponseDto> findGames(List<Integer> gameSeqs);
}
