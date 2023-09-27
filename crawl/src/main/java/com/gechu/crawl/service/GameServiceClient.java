package com.gechu.crawl.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "game", url = "https://j9d203.p.ssafy.io/api/game")
public interface GameServiceClient {

	@GetMapping("/games")
}
