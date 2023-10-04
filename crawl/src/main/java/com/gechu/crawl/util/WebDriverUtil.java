package com.gechu.crawl.util;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.FileVisitOption;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.EnumSet;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Slf4j
@Service
@RequiredArgsConstructor
public class WebDriverUtil {

	// private WebDriver driver;
	// @Value("${spring.driver.path}")
	// private String driverPath;
	// private static final String url = "https://www.metacritic.com/game/";
	private final CrawlMetaCriticAsync crawlMetaCriticAsync;

	// chromedriver 경로 체크용 함수 (더이상 안씀)
	public void checkDirectory() throws IOException {
		Path directoryPath = Paths.get("");

		log.info("디렉토리 트리 내의 모든 파일과 디렉토리를 나열 (하위 디렉토리 포함)");
		Files.walkFileTree(directoryPath, EnumSet.noneOf(FileVisitOption.class), Integer.MAX_VALUE,
			new SimpleFileVisitor<Path>() {
				@Override
				public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
					if (file.endsWith("chromedriver") || file.endsWith("chromedriver.exe")) {
						log.info("{}", file);
					}
					return FileVisitResult.CONTINUE;
				}

				@Override
				public FileVisitResult visitFileFailed(Path file, IOException exc) throws IOException {
					// 파일 접근 오류 처리
					System.err.println(exc);
					return FileVisitResult.CONTINUE;
				}
			});
	}
	//
	// public void chrome() {
	// 	Path currentPath = Paths.get("");
	// 	String path = currentPath.toAbsolutePath().toString();
	// 	log.info("현재 작업 경로: " + path);
	// 	log.info("driverPath  =" + driverPath);
	//
	// 	System.setProperty("webdriver.chrome.driver", driverPath);
	//
	// 	ChromeOptions options = new ChromeOptions();
	// 	options.setHeadless(true);
	// 	options.addArguments("--lang=ko");
	// 	options.addArguments("--no-sandbox");
	// 	options.addArguments("--disable-dev-shm-usage");
	// 	options.addArguments("--disable-gpu");
	// 	options.setCapability("ignoreProtectedModeSettings", true);
	// 	options.addArguments("--remote-allow-origins=*");
	//
	// 	this.driver = new ChromeDriver(options);
	// 	driver.manage().timeouts().pageLoadTimeout(100, TimeUnit.SECONDS);
	// }

	public void multiThreadingSpring(List<String> gameSlugs) {
		for (String gameSlug : gameSlugs) {
			crawlMetaCriticAsync.crawlMetaCritic(gameSlug);
		}
	}

	public void multiThreadingJava(List<String> gameSlugs) {
		ExecutorService executorService = Executors.newFixedThreadPool(10);
		for (int i = 0; i < gameSlugs.size(); i++) {
			CrawlMetaCriticReviewsThread crawlTask = new CrawlMetaCriticReviewsThread(i, gameSlugs.get(i));
			executorService.execute(crawlTask);
		}
		// 스레드 풀 종료
		executorService.shutdown();
	}

	// public void crawlMetaCriticUserReviews(String gameSlug) {
	// 	// try {
	// 	driver.get(url + gameSlug + "/user-reviews/");
	// 	driver.manage().timeouts().implicitlyWait(500, TimeUnit.MILLISECONDS);
	//
	// 	WebElement element = null;
	// 	// element = driver.findElement(By.xpath(
	// 	// 	"/html/body/div[1]/div/div/div[2]/div[1]/div[1]/section/div[6]/div[1]/div/div[1]/div[2]/div/span"));
	// 	//
	// 	// log.info("---------------------------------------------------------------------------------------------------------");
	// 	//
	// 	// log.info("element: {}", element);
	// 	// log.info("element.toString: {}", element.toString());
	// 	//
	// 	// log.info("log: {}", element.getText());
	// 	// log.info("---------------------------------------------------------------------------------------------------------");
	//
	// 	String pageSource = driver.getPageSource();
	//
	// 	Document document = Jsoup.parse(pageSource);
	//
	// 	String html = document.body().html();
	// 	log.info("html: {}", html);
	// }
	//
	// private void quit() {
	// 	driver.close();
	// 	driver.quit();
	// }
}