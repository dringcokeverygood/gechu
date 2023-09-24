package com.gechu.crawl.util;

import lombok.extern.slf4j.Slf4j;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.stereotype.Service;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

@Slf4j
@Service
public class WebDriverUtil {
	private WebDriver driver;

	// @Value("${spring.driver.path}")
	private String driverPath = "src/main/resources/driver/chromedriver.exe";
	private static final String url = "https://www.metacritic.com/game/";

	public void chrome() {
		Path currentPath = Paths.get("");
		String path = currentPath.toAbsolutePath().toString();
		log.info("현재 작업 경로: " + path);
		log.info("driverPath  =" + driverPath);

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

	public void multiThreading() {
		for (int i = 0; i < 4; i++) {
			log.info("{}번 쓰레드 실행중", i);
			Thread thread = new Thread(new CrawlMetaCritic(i, "the-legend-of-zelda-tears-of-the-kingdom"));
			thread.start();
			try {
				Thread.sleep(4000);
			} catch (InterruptedException e) {
				throw new RuntimeException(e);
			}
			log.info("{}번 쓰레드 실행종료", i);
		}
	}

	public void crawlMetaCriticUserReviews(String gameSlug) {
		// try {
		driver.get(url + gameSlug + "/user-reviews/");
		driver.manage().timeouts().implicitlyWait(500, TimeUnit.MILLISECONDS);

		WebElement element = null;
		// element = driver.findElement(By.xpath(
		// 	"/html/body/div[1]/div/div/div[2]/div[1]/div[1]/section/div[6]/div[1]/div/div[1]/div[2]/div/span"));
		//
		// log.info("---------------------------------------------------------------------------------------------------------");
		//
		// log.info("element: {}", element);
		// log.info("element.toString: {}", element.toString());
		//
		// log.info("log: {}", element.getText());
		// log.info("---------------------------------------------------------------------------------------------------------");

		String pageSource = driver.getPageSource();

		Document document = Jsoup.parse(pageSource);

		String html = document.body().html();
		log.info("html: {}", html);
	}
	private void quit() {
		driver.close();
		driver.quit();
	}
}