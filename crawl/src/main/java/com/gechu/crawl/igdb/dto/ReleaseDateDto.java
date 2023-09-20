package com.gechu.crawl.igdb.dto;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.TimeZone;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor @NoArgsConstructor
@Builder
public class ReleaseDateDto {
	private Long date;
	private LocalDateTime createDate;

	public void setDateTime() {
		this.createDate = LocalDateTime.ofInstant(Instant.ofEpochSecond(date), TimeZone.getDefault().toZoneId());
	}
}
