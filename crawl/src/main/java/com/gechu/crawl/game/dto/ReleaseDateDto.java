package com.gechu.crawl.game.dto;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.TimeZone;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReleaseDateDto {
	private Integer id;
	private Long date;
	private LocalDateTime createDate;

	public void setDateTime() {
		if (date == null) {
			date = 0l;
		}

		TimeZone timeZone = TimeZone.getDefault();

		if (timeZone != null) {
			this.createDate = LocalDateTime.ofInstant(Instant.ofEpochSecond(date), timeZone.toZoneId());
		} else {
			TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
			this.createDate = LocalDateTime.ofInstant(Instant.ofEpochSecond(date), ZoneOffset.UTC);
		}
	}
}
