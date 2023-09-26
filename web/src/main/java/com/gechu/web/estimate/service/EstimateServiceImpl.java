package com.gechu.web.estimate.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.estimate.entity.EstimateEntity;
import com.gechu.web.estimate.repository.EstimateRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EstimateServiceImpl implements EstimateService {

	private final EstimateRepository estimateRepository;

	@Override
	public Long upsertEstimate(EstimateDto estimateDto) {
		EstimateEntity estimateEntity = estimateRepository.findByGameSeqAndUserSeq(estimateDto.getGameSeq(),
			estimateDto.getUserSeq());

		if (estimateEntity != null) {
			estimateEntity.updateUserLike(estimateDto.getLike());
			return estimateEntity.getSeq();
		} else {
			EstimateEntity save = estimateRepository.save(EstimateDto.toEntity(estimateDto));
			return save.getSeq();
		}
	}

	@Override
	public List<EstimateDto> findLikeForGame(Long gameSeq) {
		List<EstimateEntity> estimateEntities = estimateRepository.findByGameSeq(gameSeq);
		if (estimateEntities.size() == 0) {
			List<EstimateDto> estimateDtoList = new ArrayList<>();
			return estimateDtoList;
		}
		return estimateEntities.stream().map(EstimateEntity::toDto).collect(Collectors.toList());
	}
}
