package com.gechu.web.elasticsearch.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class MessageContent {

    @JsonProperty("GameSeq")
    private Integer gameSeq;

    @JsonProperty("UserSeq")
    private Integer userSeq;

    @JsonProperty("EstimateSeq")
    private Integer estimateSeq;

    @JsonProperty("Text")
    private String text;
}
