package com.gechu.web.elasticsearch.dto;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;


@Getter
@Document(indexName = "logstash-spring-boot-*")
public class LogDocument {

    @Id
    private String id;

    @Field(name = "@timestamp")
    private String timestamp;
    private int port;
    private String level;
    private String threadName;
    private String host;

    @Field(name = "@version")
    private String version;
    private String loggerName;
    private String message;
}
