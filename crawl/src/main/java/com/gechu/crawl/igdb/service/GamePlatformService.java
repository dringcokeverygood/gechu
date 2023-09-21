package com.gechu.crawl.igdb.service;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Service;

import com.gechu.crawl.igdb.dto.GameApiDto;
import com.gechu.crawl.igdb.entity.GamePlatformEntity;
import com.gechu.crawl.igdb.entity.PlatformEntity;
import com.gechu.crawl.igdb.repository.GamePlatformRepository;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GamePlatformService {

	private final GamePlatformRepository gamePlatformRepository;

	public void insertGamePlatform(GameApiDto gameApiDto) {
		Integer gameSeq = gameApiDto.getId();
		List<Integer> platforms = gameApiDto.getPlatforms();
		for (Integer platformSeq : platforms) {
			gamePlatformRepository.save(GamePlatformEntity.builder()
				.gameSeq(gameSeq)
				.platformSeq(platformSeq)
				.build());
		}
	}


}
