package com.gechu.crawl.util;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

import javax.annotation.PostConstruct;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CrawlMetaCriticAsyncBean {

	private WebDriver driver;

	// @Value("spring.driver.path")
	// private String driverPath;
	private String driverPath = "src/main/resources/driver/chromedriver-116.exe";
	private static final String url = "https://www.metacritic.com/game/";

	@PostConstruct
	public void init() {
		System.setProperty("webdriver.chrome.driver", driverPath);

		ChromeOptions options = new ChromeOptions();
		options.setHeadless(true);
		options.addArguments("--lang=ko");
		options.addArguments("--no-sandbox");
		options.addArguments("--disable-dev-shm-usage");
		options.addArguments("--disable-gpu");
		options.setCapability("ignoreProtectedModeSettings", true);
		options.addArguments("--remote-allow-origins=*");

		this.driver = new ChromeDriver(options);
		driver.manage().timeouts().pageLoadTimeout(100, TimeUnit.SECONDS);
	}

	@Async
	public void sync() {

	}

	public

}
