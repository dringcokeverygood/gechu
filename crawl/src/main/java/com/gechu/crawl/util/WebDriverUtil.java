package com.gechu.crawl.util;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import com.gechu.crawl.dto.NewsRequestDto;

@Slf4j
@Service
@RequiredArgsConstructor
public class WebDriverUtil {

	public void crawlMetaCritic(List<String> gameSlugs) {
		ExecutorService executorService = Executors.newFixedThreadPool(10);
		for (int i = 0; i < gameSlugs.size(); i++) {
			CrawlMetaCriticReviewsThread crawlTask = new CrawlMetaCriticReviewsThread(i, gameSlugs.get(i));
			executorService.execute(crawlTask);
		}
		// 스레드 풀 종료
		executorService.shutdown();
	}
}