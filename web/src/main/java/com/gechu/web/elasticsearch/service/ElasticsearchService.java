package com.gechu.web.elasticsearch.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gechu.web.elasticsearch.dto.LogDocument;
import com.gechu.web.elasticsearch.dto.MessageContent;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.mapping.IndexCoordinates;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ElasticsearchService {

    @Autowired
    private ElasticsearchRestTemplate elasticsearchRestTemplate;

    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<Integer> getTopGameSeqBySearchWord(String searchWord) {
        // Bool Query 생성
        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery()
                .must(QueryBuilders.termQuery("logger_name.keyword", "ReviewServiceImpl"));

        // NativeSearchQuery 객체를 생성하고 Bool Query 설정
        NativeSearchQuery query = new NativeSearchQuery(boolQueryBuilder);

        // logstash 클래스 타입의 리스트로 반환
        List<LogDocument> matchedMessages = elasticsearchRestTemplate
                .search(query, LogDocument.class, IndexCoordinates.of("logstash-spring-boot-*"))
                .stream()
                .map(SearchHit::getContent)
                .collect(Collectors.toList());

        // message 필드를 Json 형태로 변환
        List<MessageContent> messageContents = matchedMessages.stream()
                .map(logDocument -> {
                    try {
                        return objectMapper.readValue(logDocument.getMessage(), MessageContent.class);
                    } catch (IOException e) {
                        System.out.println(e);
                        return null;
                    }
                })
                .filter(content -> content != null)
                .collect(Collectors.toList());

        Map<Integer, Long> gameSeqFrequencyMap = messageContents.stream()
                .filter(content -> content.getText().contains(searchWord))
                .collect(Collectors.groupingBy(MessageContent::getGameSeq, Collectors.counting()));

        return gameSeqFrequencyMap.entrySet().stream()
                .sorted(Map.Entry.<Integer, Long>comparingByValue().reversed())
                .limit(10)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
    }
}