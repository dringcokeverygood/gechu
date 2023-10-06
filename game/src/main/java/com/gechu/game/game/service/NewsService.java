package com.gechu.game.game.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.gechu.game.game.dto.GameResponseDto;
import com.gechu.game.game.dto.NewsRequestDto;
import com.gechu.game.game.dto.NewsResponseDto;
import com.gechu.game.game.entity.GameEntity;
import com.gechu.game.game.entity.NewsEntity;
import com.gechu.game.game.repository.GameRepository;
import com.gechu.game.game.repository.NewsRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class NewsService {

	private final GameRepository gameRepository;
	private final NewsRepository newsRepository;

	@Transactional
	public void insertNews(NewsRequestDto newsRequestDto) {
		GameEntity gameEntity = gameRepository.findByGameSlug(newsRequestDto.getGameSlug());
		NewsEntity newsEntity = NewsEntity.builder()
			.url(newsRequestDto.getUrl())
			.content(newsRequestDto.getContent())
			.headline(newsRequestDto.getHeadline())
			.imageUrl(newsRequestDto.getImageUrl())
			.game(gameEntity)
			.build();

		newsRepository.save(newsEntity);
	}

	public List<NewsResponseDto> findNewsByGameSeq(Integer gameSeq) {
		List<NewsEntity> newsEntities = newsRepository.findByGame_Seq(gameSeq);
		return newsEntities.stream().map(NewsEntity::toResponseDto).collect(Collectors.toList());
	}

	public List<NewsResponseDto> findNewsByCount(Integer count) {
		List<NewsEntity> newsEntities = newsRepository.findRandomEntities(count);
		return newsEntities.stream().map(NewsEntity::toResponseDto).collect(Collectors.toList());
	}
}
