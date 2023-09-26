package com.gechu.web.estimate.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

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
	@Transactional
	public Long upsertEstimate(EstimateDto estimateDto) {
		EstimateEntity estimateEntity = estimateRepository.findByGameSeqAndUsers_Seq(estimateDto.getGameSeq(),
			estimateDto.getUserSeq());

		if (estimateEntity != null) {
			estimateEntity.updateUserLike(estimateDto.getLike());
			return estimateEntity.getSeq();
		}

		EstimateEntity save = estimateRepository.save(EstimateDto.toEntity(estimateDto));
		return save.getSeq();
	}

	@Override
	public List<EstimateDto> findEstimatesByGameSeq(Long gameSeq) {
		List<EstimateEntity> estimateEntities = estimateRepository.findByGameSeq(gameSeq);
		if (estimateEntities.size() == 0) {
			return new ArrayList<>();
		}
		return estimateEntities.stream().map(EstimateEntity::toDto).collect(Collectors.toList());
	}

	public List<EstimateDto> findEstimatesByUserSeq(Long userSeq) {
		List<EstimateEntity> estimateEntities = estimateRepository.findByUserSeq(userSeq);
		List<EstimateDto> estimateDtos = new ArrayList<>();
		for (EstimateEntity estimateEntity : estimateEntities) {
			if (estimateEntity.getReviewEntity() != null) {
				estimateDtos.add(EstimateEntity.toDto(estimateEntity));
			}
		}
		return estimateDtos;
	}
}
