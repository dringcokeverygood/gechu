package com.gechu.web.elasticsearch2.document;

import javax.persistence.Entity;

import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Mapping;
import org.springframework.data.elasticsearch.annotations.Setting;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(indexName = "")
@Mapping(mappingPath = "elastic/member-mapping.json")
@Setting(settingPath = "elastic/member-setting.json")
public class ReviewDocument{

}
