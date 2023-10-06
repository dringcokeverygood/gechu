package com.gechu.game.game.service;

import org.springframework.stereotype.Service;

import com.gechu.game.game.dto.PlatformApiDto;
import com.gechu.game.game.dto.PlatformDto;
import com.gechu.game.game.entity.PlatformEntity;
import com.gechu.game.game.repository.PlatformRepository;

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
