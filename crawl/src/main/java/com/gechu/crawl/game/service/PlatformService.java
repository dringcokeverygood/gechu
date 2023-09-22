package com.gechu.crawl.game.service;

import org.springframework.stereotype.Service;

import com.gechu.crawl.game.dto.PlatformApiDto;
import com.gechu.crawl.game.dto.PlatformDto;
import com.gechu.crawl.game.entity.PlatformEntity;
import com.gechu.crawl.game.repository.PlatformRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlatformService {

	private final PlatformRepository platformRepository;

	public void insertPlatforms(PlatformApiDto platformApiDto) {
		PlatformEntity platformEntity = PlatformApiDto.toEntity(platformApiDto);
		platformRepository.save(platformEntity);
	}

	public PlatformDto findPlatformBySlug(String slug) {
		PlatformEntity platformEntity = platformRepository.findByPlatformSlug(slug);

		return PlatformEntity.toDto(platformEntity);
	}

}
