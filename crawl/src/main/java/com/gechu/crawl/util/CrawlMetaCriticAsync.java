package com.gechu.crawl.util;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import javax.annotation.PostConstruct;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.gechu.crawl.service.GameServiceClient;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CrawlMetaCriticAsync {

	private WebDriver driver;

	@Value("${spring.driver.path}")
	private String driverPath;
	// private String driverPath = "src/main/resources/driver/chromedriver-116.exe";
	private static final String URL = "https://www.metacritic.com/game/";
	private final GameServiceClient gameServiceClient;

	// @PostConstruct
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
		// driver.manage().timeouts().pageLoadTimeout(200, TimeUnit.SECONDS);
	}

	@Async
	public void crawlMetaCritic(String gameSlug) {
		log.info("새 게임 크롤링 시작: {}", gameSlug);
		// init();
		insertMetaCriticScore(gameSlug);
		// crawlMetaCriticUserReviews(gameSlug);
	}

	public void insertMetaCriticScore(String gameSlug) {
		Document doc = null;
		Elements elements = null;
		try {
			doc = Jsoup.connect(URL + gameSlug).get();


			elements = doc.select("span[data-v-4cdca868]");

		} catch (IOException e) {
			log.warn("유효하지 않은 jsoup connect 입니다. gameSlug: {}", gameSlug);
		}

		Map<String, Object> map = new HashMap<>();
		// Elements elements = doc.select("span[data-v-4cdca868]");

		// Map<String, Object> map = new HashMap<>();

		try {
			map.put("score", Integer.parseInt(elements.get(0).text()));
		} catch (Exception e) {
			map.put("score", 0);
		}

		gameServiceClient.insertMetaCriticScore(gameSlug, map);
	}
	public void crawlMetaCriticUserReviews(String gameSlug) {
		// try {
		log.info("내용 크롤링 시작: {}", gameSlug);
		driver.get(URL + gameSlug + "/user-reviews/");
		driver.manage().timeouts().implicitlyWait(500, TimeUnit.MILLISECONDS);

		WebElement element = null;

		element = driver.findElement(
			By.xpath("/html/body/div[1]/div/div/div[2]/div[1]/div[1]/section/div[5]/div[1]"));

		int reviewCnt = Integer.parseInt(element.getText().split(" ")[1].replace(",", ""));
		log.info("{} 게임 리뷰 갯수 : {}", gameSlug, reviewCnt);

		if (reviewCnt > 50) {
			JavascriptExecutor js = (JavascriptExecutor)driver;
			for (int i = 0; i < Math.min(reviewCnt / 40, 3); i++) {
				js.executeScript("window.scrollTo(0, document.body.scrollHeight);");
				log.info("{} 게임 스크롤 내림", gameSlug);
				try {
					Thread.sleep(500);
				} catch (InterruptedException e) {
					throw new RuntimeException(e);
				}
			}
		}

		StringBuffer sb = new StringBuffer();
		for (int i = 1; i <= (Math.min(reviewCnt, 100)); i++) {
			log.info("{} 게임 리뷰 하나 찾음 현재 {}개째", gameSlug, i);
			element = driver.findElement(By.xpath(
				"/html/body/div[1]/div/div/div[2]/div[1]/div[1]/section/div[6]/div[" + i
					+ "]/div/div[1]/div[2]/div/span"));

			sb.append(element.getText());
			sb.append(' ');
		}
		log.info("{}", sb);
		driver.quit();
	}

}
