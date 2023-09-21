package com.gechu.crawl.igdb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gechu.crawl.igdb.dto.GameDto;
import com.gechu.crawl.igdb.entity.GameEntity;
import com.gechu.crawl.igdb.repository.GameRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GameService {

	private final GameRepository gameRepository; // 초기화 필수

	public GameEntity insertGame(GameDto gameDto) {
		GameEntity gameEntity = GameDto.toEntity(gameDto);
		gameRepository.save(gameEntity);
		return gameEntity;
	}
}
