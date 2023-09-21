package com.gechu.crawl.igdb.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.gechu.crawl.igdb.dto.PlatformDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "platform")
@Builder
public class PlatformEntity {

	@Id
	private Integer seq;

	@NotNull
	private String platformName;

	@NotNull
	private String platformSlug;

	public static PlatformDto toDto(PlatformEntity platformEntity) {
		return PlatformDto.builder()
			.seq(platformEntity.getSeq())
			.platformName(platformEntity.getPlatformName())
			.platformSlug(platformEntity.getPlatformSlug())
			.build();
	}
}
