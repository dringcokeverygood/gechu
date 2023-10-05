package com.gechu.web.elasticsearch.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gechu.web.elasticsearch.dto.ArticleContent;
import com.gechu.web.elasticsearch.dto.LogDocument;
import com.gechu.web.elasticsearch.dto.ReviewContent;
import lombok.extern.slf4j.Slf4j;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.mapping.IndexCoordinates;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.Order;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.Duration;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@Slf4j
public class ElasticsearchService {

    @Autowired
    private ElasticsearchRestTemplate elasticsearchRestTemplate;

    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<String> getTopGameBySearchWord(String searchWord) {
        // Bool Query 생성
        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery()
                .must(QueryBuilders.termQuery("logger_name.keyword", "CrawlMetaCriticReviewsThread"));

        // NativeSearchQuery 객체를 생성하고 Bool Query 설정
        NativeSearchQuery query = new NativeSearchQuery(boolQueryBuilder);
        query.setMaxResults(500);

        // logstash 클래스 타입의 리스트로 반환
        List<LogDocument> matchedMessages = elasticsearchRestTemplate
                .search(query, LogDocument.class, IndexCoordinates.of("logstash-spring-boot-*"))
                .stream()
                .map(SearchHit::getContent)
                .collect(Collectors.toList());

        // message 필드를 Json 형태로 변환
        List<ReviewContent> reviewContents = matchedMessages.stream()
                .map(logDocument -> {
                    try {
                        return objectMapper.readValue(logDocument.getMessage(), ReviewContent.class);
                    } catch (IOException e) {
                        System.out.println(e);
                        return null;
                    }
                })
                .filter(content -> content != null)
                .collect(Collectors.toList());

        Map<String, Long> gameSeqFrequencyMapByGameSlug = reviewContents.stream()
                .filter(content -> content.getGameSlug().contains(searchWord))
                .collect(Collectors.groupingBy(ReviewContent::getGameSlug, Collectors.counting()));

        Map<String, Long> gameSeqFrequencyMapByReviews = reviewContents.stream()
                .filter(content -> content.getReviews().contains(searchWord))
                .collect(Collectors.groupingBy(ReviewContent::getGameSlug, Collectors.counting()));

        gameSeqFrequencyMapByGameSlug.forEach((key, value) ->
                gameSeqFrequencyMapByReviews.merge(key, value, Long::sum)
        );

        Map<String, Long> combinedMap = new HashMap<>(gameSeqFrequencyMapByGameSlug);
        gameSeqFrequencyMapByReviews.forEach((key, value) ->
                combinedMap.merge(key, value, Long::sum)
        );

        return combinedMap.entrySet().stream()
                .sorted(Map.Entry.<String, Long>comparingByValue().reversed())
                .limit(30)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
    }

    public List<String> getRecentGames() {
        // Bool Query 생성
        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery()
                .must(QueryBuilders.termQuery("logger_name.keyword", "CrawlMetaCriticReviewsThread"));

        // NativeSearchQuery 객체를 생성하고 Bool Query 설정
        NativeSearchQuery query = new NativeSearchQuery(boolQueryBuilder);
        query.setMaxResults(2000);

        // logstash 클래스 타입의 리스트로 반환
        List<LogDocument> matchedMessages = elasticsearchRestTemplate
                .search(query, LogDocument.class, IndexCoordinates.of("logstash-spring-boot-*"))
                .stream()
                .map(SearchHit::getContent)
                .collect(Collectors.toList());

        log.info("logdocument -> {}", matchedMessages.size());

        // message 필드를 Json 형태로 변환
        List<ReviewContent> reviewContents = matchedMessages.stream()
                .map(logDocument -> {
                    try {
                        return objectMapper.readValue(logDocument.getMessage(), ReviewContent.class);
                    } catch (IOException e) {
                        System.out.println(e);
                        return null;
                    }
                })
                .filter(content -> content != null)
                .collect(Collectors.toList());

        log.info("reviewContents -> {}", reviewContents.size());

        return reviewContents.stream()
                .sorted(Comparator.comparing(ReviewContent::getDates).reversed())
                .limit(20)
                .map(ReviewContent::getGameSlug)
                .collect(Collectors.toList());
    }

    public List<Long> getArticleBySearchWord(String searchWord) {
        // Bool Query 생성
        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery()
                .must(QueryBuilders.termQuery("logger_name.keyword", "ArticleServiceImpl"));

        // NativeSearchQuery 객체를 생성하고 Bool Query 설정
        NativeSearchQuery query = new NativeSearchQuery(boolQueryBuilder);
        query.setMaxResults(200);

        // logstash 클래스 타입의 리스트로 반환
        List<LogDocument> matchedMessages = elasticsearchRestTemplate
                .search(query, LogDocument.class, IndexCoordinates.of("logstash-spring-boot-*"))
                .stream()
                .map(SearchHit::getContent)
                .collect(Collectors.toList());

        // message 필드를 Json 형태로 변환
        List<ArticleContent> articleContents = matchedMessages.stream()
                .map(logDocument -> {
                    try {
                        return objectMapper.readValue(logDocument.getMessage(), ArticleContent.class);
                    } catch (IOException e) {
                        System.out.println(e);
                        return null;
                    }
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        Map<Long, Long> articleMap = articleContents.stream()
                .filter(content -> content.getContent().contains(searchWord))
                .collect(Collectors.groupingBy(ArticleContent::getSeq, Collectors.counting()));

        return articleMap.entrySet().stream()
                .sorted(Map.Entry.<Long, Long>comparingByValue().reversed())
                .limit(10)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
    }
}