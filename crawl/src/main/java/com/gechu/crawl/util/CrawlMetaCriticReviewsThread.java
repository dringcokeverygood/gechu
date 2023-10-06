package com.gechu.crawl.util;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;

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
	private String[] months = {"JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"};

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
		try {
			driver.get(url + gameSlug + "/user-reviews/");
			driver.manage().timeouts().implicitlyWait(500, TimeUnit.MILLISECONDS);
		} catch (Exception e) {
			driver.quit();
			return;
		}
		WebElement element = null;

		try {
		element = driver.findElement(
			By.xpath("/html/body/div[1]/div/div/div[2]/div[1]/div[1]/section/div[5]/div[1]"));

		} catch (Exception e) {
			if (driver != null) {
				driver.quit();
			}
			return;
		}
		// int reviewCnt = Integer.parseInt(element.getText().split(" ")[1].replace(",", ""));

		StringBuffer reviews = new StringBuffer();

		try {
			element = driver.findElement(By.xpath(
				"/html/body/div[1]/div/div/div[2]/div[1]/div[1]/section/div[6]"));
		} catch (Exception e) {
			if (driver != null) {
				driver.quit();
			}
			return;
		}
		String reviewsAll = element.getText();
		List<String> reviewsList = Arrays.stream(reviewsAll.split("\n")).collect(Collectors.toList());
		Pattern pattern = Pattern.compile("^[A-Z]{3} \\d{1,2}, \\d{4}$");
		int allDate = 0;

		for (int i = 0; i < reviewsList.size(); i++) {
			String review = reviewsList.get(i);
			Matcher matcher = pattern.matcher(review);
			if (matcher.matches()) {
				String[] s = review.split(" ");
				allDate += ((Integer.parseInt(s[2]) * 365) + (convertMonth(s[0]) * 30) + Integer.parseInt(s[1].split(",")[0]));
			}
			if (review.length() > 20) {
				reviews.append(review);
				reviews.append(" ");
			}
		}
		log.info("{}의 리뷰 크롤링 완료, 번호는 {}입니다.", gameSlug, cnt);

		Map<String, String> map = new ConcurrentHashMap<>();
		map.put("gameSlug", gameSlug);
		map.put("reviews", reviews.toString());
		map.put("dates", String.valueOf(allDate));

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

		if (driver != null) {
			driver.quit();
		}
	}

	public int convertMonth(String month) {
		for (int i = 0; i < 12; i++) {
			if (months[i].equals(month)) return i + 1;
		}
		return 0;
	}
}


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


// for (int i = 1; i <= (Math.min(reviewCnt, 50)); i++) {
//
// 	element = driver.findElement(By.xpath(
// 		"/html/body/div[1]/div/div/div[2]/div[1]/div[1]/section/div[6]/div[" + i
// 			+ "]/div/div[1]/div[2]/div/span"));
//
// 	sb.append(element.getText());
// 	sb.append(' ');
// }