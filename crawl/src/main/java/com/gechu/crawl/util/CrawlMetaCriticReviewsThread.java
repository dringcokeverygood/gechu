package com.gechu.crawl.util;

import java.io.BufferedReader;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gechu.crawl.service.ReviewServiceClient;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class CrawlMetaCriticReviewsThread implements Runnable {

	private String gameSlug;
	private int cnt;
	private WebDriver driver;
	private String driverPath = "usr/bin/chromedriver-linux64/chromedriver";
	private static final String url = "https://www.metacritic.com/game/";
	private final Logger logger = LoggerFactory.getLogger(this.getClass().getSimpleName());
	private ObjectMapper objectMapper = new ObjectMapper();

	public CrawlMetaCriticReviewsThread(int cnt, String gameSlug) {
		this.cnt = cnt;
		this.gameSlug = gameSlug;
	}

	@Override
	public void run() {
		chrome();
		crawlMetaCriticUserReviews(gameSlug);
	}

	public void chrome() {
		Path currentPath = Paths.get("");
		String path = currentPath.toAbsolutePath().toString();

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
	}

	public void crawlMetaCriticUserReviews(String gameSlug) {
		// try {
		driver.get(url + gameSlug + "/user-reviews/");
		driver.manage().timeouts().implicitlyWait(500, TimeUnit.MILLISECONDS);

		WebElement element = null;

		element = driver.findElement(
			By.xpath("/html/body/div[1]/div/div/div[2]/div[1]/div[1]/section/div[5]/div[1]"));

		int reviewCnt = Integer.parseInt(element.getText().split(" ")[1].replace(",", ""));

		// if (reviewCnt > 50) {
		// 	JavascriptExecutor js = (JavascriptExecutor)driver;
		// 	for (int i = 0; i < 2; i++) {
		// 		js.executeScript("window.scrollTo(0, document.body.scrollHeight);");
		// 		try {
		// 			Thread.sleep(500);
		// 		} catch (InterruptedException e) {
		// 			driver.quit();
		// 			throw new RuntimeException(e);
		// 		}
		// 	}
		// }
		StringBuffer sb = new StringBuffer();
		// for (int i = 1; i <= (Math.min(reviewCnt, 50)); i++) {
		//
		// 	element = driver.findElement(By.xpath(
		// 		"/html/body/div[1]/div/div/div[2]/div[1]/div[1]/section/div[6]/div[" + i
		// 			+ "]/div/div[1]/div[2]/div/span"));
		//
		// 	sb.append(element.getText());
		// 	sb.append(' ');
		// }
		element = driver.findElement(By.xpath(
			"/html/body/div[1]/div/div/div[2]/div[1]/div[1]/section/div[6]"));

		String reviewsAll = element.getText();
		List<String> reviewsArr = Arrays.stream(reviewsAll.split("\n")).collect(Collectors.toList());

		for (int i = 0; i < reviewsArr.size(); i++) {
			if (i % 5 == 2) {
				sb.append(reviewsArr.get(i));
			}
		}
		log.info("{}의 리뷰 html정보", gameSlug);
		log.info("{}", sb);

		Map<String, String> map = new HashMap<>();
		map.put("gameSlug", gameSlug);
		map.put("reviews", sb.toString());

		try {
			String logJson = objectMapper.writeValueAsString(map);
			logger.info(logJson);
		} catch (Exception e) {
			logger.error("Error converting log message to JSON", e);
		} finally {
			if (driver != null) {
				driver.quit();
			}
		}

		driver.quit();
	}
}
