package com.gechu.crawl.util;

import java.io.IOException;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import com.gechu.crawl.dto.NewsRequestDto;
import com.gechu.crawl.service.GameServiceClient;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class CrawlNews {

	private final GameServiceClient gameServiceClient;

	public void crawlNews(String gameSlug) {
		Document document = null;
		try {
			document = Jsoup.connect("https://www.gamespot.com/games/" + gameSlug + "/news/").get();
		} catch (IOException e) {
			e.printStackTrace();
			return;
		}

		Elements articles = document.select("section.editorial.river article.media-article");

		for (Element article : articles) {
			Element aTag = article.selectFirst("a[href]");
			String url = "https://www.gamespot.com" + aTag.attr("href");

			Element imageElement = article.selectFirst("img");
			String imageUrl = imageElement.attr("src");

			// h3.media-title
			Element titleElement = article.selectFirst("h3.media-title");
			String headline = titleElement.text();

			// p.media-deck
			Element deckElement = article.selectFirst("p.media-deck");
			String content = deckElement.text();

			gameServiceClient.insertNews(NewsRequestDto.builder()
				.url(url)
				.imageUrl(imageUrl)
				.content(content)
				.headline(headline)
				.gameSlug(gameSlug)
				.build());
		}
	}
}
