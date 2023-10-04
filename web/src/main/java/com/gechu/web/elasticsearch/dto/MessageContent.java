package com.gechu.web.elasticsearch.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class MessageContent {

    private String gameSlug;

    private String reviews;
}
