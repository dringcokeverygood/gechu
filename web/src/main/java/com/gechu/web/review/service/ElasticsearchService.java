package com.gechu.web.review.service;

import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.mapping.IndexCoordinates;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.stereotype.Service;

@Service
public class ElasticsearchService {

    @Autowired
    private ElasticsearchRestTemplate elasticsearchRestTemplate;

    public long countDocuments() {
        // Bool Query 생성
        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery()
                .must(QueryBuilders.termQuery("logger_name.keyword", "ReviewServiceImpl"))
                .must(QueryBuilders.queryStringQuery("Overwatch").field("message"));

        // NativeSearchQuery 객체를 생성하고 Bool Query 설정
        NativeSearchQuery query = new NativeSearchQuery(boolQueryBuilder);

        // _count API를 사용하여 문서 개수 반환
        return elasticsearchRestTemplate.count(query, Object.class, IndexCoordinates.of("logstash-spring-boot-2023.10.02"));
    }
}
