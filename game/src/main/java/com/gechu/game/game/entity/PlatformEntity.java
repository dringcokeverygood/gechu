package com.gechu.game.game.entity;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.gechu.game.game.dto.PlatformDto;

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

	public static List<String> toPlatformSlugList(List<PlatformEntity> platformEntities) {
		return platformEntities.stream().map(PlatformEntity::getPlatformSlug).collect(Collectors.toList());
	}

	public static List<String> toPlatformNameList(List<PlatformEntity> platformEntities) {
		return platformEntities.stream().map(PlatformEntity::getPlatformName).collect(Collectors.toList());
	}
}
