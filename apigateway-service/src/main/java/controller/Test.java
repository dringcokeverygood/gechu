package controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class Test {

	@GetMapping("/test")
	public String test() {
		log.info("이해가 안되네");
		return "test";
	}
}
