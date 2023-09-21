package com.gechu.crawl.igdb.service;

import org.springframework.stereotype.Service;

import com.gechu.crawl.igdb.dto.PlatformApiDto;
import com.gechu.crawl.igdb.dto.PlatformDto;
import com.gechu.crawl.igdb.entity.PlatformEntity;
import com.gechu.crawl.igdb.repository.PlatformRepository;

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
