package com.gechu.crawl.util;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class CrawlMetaCriticReviewsThread implements Runnable {

	private String gameSlug;
	private int cnt;
	private WebDriver driver;
	private String driverPath = "usr/bin/chromedriver-linux64/chromedriver";
	private static final String url = "https://www.metacritic.com/game/";

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

		if (reviewCnt > 50) {
			JavascriptExecutor js = (JavascriptExecutor)driver;
			for (int i = 0; i < Math.min(reviewCnt / 40, 5); i++) {
				js.executeScript("window.scrollTo(0, document.body.scrollHeight);");
				try {
					Thread.sleep(500);
				} catch (InterruptedException e) {
					throw new RuntimeException(e);
				}
			}
		}
		StringBuffer sb = new StringBuffer();
		for (int i = 1; i <= (Math.min(reviewCnt, 200)); i++) {

			element = driver.findElement(By.xpath(
				"/html/body/div[1]/div/div/div[2]/div[1]/div[1]/section/div[6]/div[" + i
					+ "]/div/div[1]/div[2]/div/span"));

			sb.append(element.getText());
			sb.append(' ');
		}
		log.info("{}번 쓰레드의 리뷰정보 일부 출력: {}", cnt, sb);
		log.info("{}번 쓰레드 element 크롤링 끝", cnt);
		driver.quit();
	}
}
