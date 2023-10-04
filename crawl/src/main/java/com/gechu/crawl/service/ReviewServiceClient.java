package com.gechu.crawl.service;

import java.util.List;
import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "web", url = "https://j9d203.p.ssafy.io/api/web")
public interface ReviewServiceClient {
	@PostMapping("/reviews/crawl")
	public String insertMetaCriticScore(@RequestBody Map<String, Object> map);
}