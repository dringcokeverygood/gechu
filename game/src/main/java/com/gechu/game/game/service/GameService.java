package com.gechu.game.game.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.gechu.game.game.dto.GameDto;
import com.gechu.game.game.dto.GameResponseDto;
import com.gechu.game.game.entity.GameEntity;
import com.gechu.game.game.entity.GenreEntity;
import com.gechu.game.game.entity.PlatformEntity;
import com.gechu.game.game.repository.GameGenreRepository;
import com.gechu.game.game.repository.GamePlatformRepository;
import com.gechu.game.game.repository.GameRepository;
import com.gechu.game.game.repository.GenreRepository;
import com.gechu.game.game.repository.PlatformRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class GameService {

	private final GameRepository gameRepository;
	private final GameGenreRepository gameGenreRepository;
	private final GamePlatformRepository gamePlatformRepository;
	private final GenreRepository genreRepository;
	private final PlatformRepository platformRepository;

	public void insertGame(GameDto gameDto) {
		GameEntity gameEntity = GameDto.toEntity(gameDto);
		gameRepository.save(gameEntity);
	}

	public List<GameResponseDto> findAllGamesBySeqIn(List<Integer> gameSeqs) {
		List<GameEntity> gameEntities = gameRepository.findAllBySeqIn(gameSeqs);

		List<GameResponseDto> gameResponseDtos = gameEntities.stream()
			.map(GameEntity::toDtoDetail)
			.collect(Collectors.toList());

		setGenresAndPlatforms(gameResponseDtos);

		return gameResponseDtos;
	}

	public List<GameResponseDto> findAllGamesBySlugIn(List<String> gameSlugs) {
		List<GameEntity> gameEntities = gameRepository.findAllByGameSlugIn(gameSlugs);

		List<GameResponseDto> gameResponseDtos = gameEntities.stream()
			.map(GameEntity::toDtoDetail)
			.collect(Collectors.toList());

		setGenresAndPlatforms(gameResponseDtos);

		return gameResponseDtos;
	}

	public GameResponseDto findGameDetailBySlug(String gameSlug) {
		GameEntity gameEntity = gameRepository.findByGameSlug(gameSlug);
		Integer seq = gameEntity.getSeq();

		GameResponseDto gameResponseDto = GameEntity.toDtoDetail(gameEntity);

		setGameGenres(gameResponseDto, seq);
		setGamePlatforms(gameResponseDto, seq);

		return gameResponseDto;
	}

	public GameResponseDto findGameDetailBySeq(Integer gameSeq) {
		GameEntity gameEntity = gameRepository.findBySeq(gameSeq);

		GameResponseDto gameResponseDto = GameEntity.toDtoDetail(gameEntity);

		setGameGenres(gameResponseDto, gameSeq);
		setGamePlatforms(gameResponseDto, gameSeq);

		return gameResponseDto;
	}

	public GameResponseDto findGameBySeq(Integer gameSeq) {
		GameEntity gameEntity = gameRepository.findBySeq(gameSeq);

		return GameEntity.toDtoDetail(gameEntity);
	}

	private void setGameGenres(GameResponseDto gameResponseDto, Integer gameSeq) {

		List<GenreEntity> genreEntities = genreRepository.findGenresByGameSeq(gameSeq);

		gameResponseDto.setGenres(GenreEntity.toGenreNameList(genreEntities));
		gameResponseDto.setGenreSlugs(GenreEntity.toGenreSlugList(genreEntities));
	}

	private void setGamePlatforms(GameResponseDto gameResponseDto, Integer gameSeq) {

		List<PlatformEntity> platformEntities = platformRepository.findPlatformsByGameSeq(gameSeq);

		gameResponseDto.setPlatforms(PlatformEntity.toPlatformNameList(platformEntities));
		gameResponseDto.setPlatformSlugs(PlatformEntity.toPlatformSlugList(platformEntities));
	}

	private void setGenresAndPlatforms(List<GameResponseDto> gameResponseDtos) {
		for (GameResponseDto gameResponseDto : gameResponseDtos) {
			Integer seq = gameResponseDto.getSeq();

			setGameGenres(gameResponseDto, seq);
			setGamePlatforms(gameResponseDto, seq);
		}
	}
}
