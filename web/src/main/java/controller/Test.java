package controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test {

	@GetMapping("/{path}")
	public String test(@PathVariable String path) {
		return path;
	}
}
