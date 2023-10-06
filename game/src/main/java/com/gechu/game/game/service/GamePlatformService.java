package com.gechu.game.game.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.gechu.game.game.dto.GameApiDto;
import com.gechu.game.game.dto.GamePlatformDto;
import com.gechu.game.game.entity.GamePlatformEntity;
import com.gechu.game.game.repository.GamePlatformRepository;

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
