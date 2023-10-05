package com.gechu.web.elasticsearch2.config;

import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.data.elasticsearch.client.ClientConfiguration;
import org.springframework.data.elasticsearch.client.RestClients;
import org.springframework.data.elasticsearch.config.AbstractElasticsearchConfiguration;

public class ElasticSearchConfig extends AbstractElasticsearchConfiguration {
	@Override
	public RestHighLevelClient elasticsearchClient() {
		ClientConfiguration clientConfiguration = ClientConfiguration.builder()
			.connectedTo("j9d203a.p.ssafy.io:9200")
			.build();
		return RestClients.create(clientConfiguration).rest();
	}
}
