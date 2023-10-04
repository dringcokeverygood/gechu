package com.gechu.web.estimate.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.estimate.entity.EstimateEntity;
import com.gechu.web.estimate.repository.EstimateRepository;

import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
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
        log.info("service의 최상단");
        List<EstimateEntity> estimateEntities = null;
        try {
            estimateEntities = estimateRepository.findByGameSeq(gameSeq);
        } catch (Exception e) {
            e.printStackTrace();
        }
        log.info("service -> {}", estimateEntities.get(0).getUserLike());
        log.info("service users -> {}", estimateEntities.get(0).getUsers().getSeq());
        if (estimateEntities.size() == 0) {
            return new ArrayList<>();
        }
        return estimateEntities.stream().map(EstimateEntity::toDto).collect(Collectors.toList());
    }

    public List<EstimateDto> findEstimatesWhereReviewIsNotNullByUserSeq(Long userSeq) {
        List<EstimateEntity> estimateEntities = estimateRepository.findByUsers_Seq(userSeq);
        return estimateEntities.stream()
                .filter(e -> e.getReviewEntity() != null)
                .map(EstimateEntity::toDto)
                .collect(Collectors.toList());
    }

    public List<EstimateDto> findEstimatesByUserSeq(Long userSeq) {
        List<EstimateEntity> estimateEntities = estimateRepository.findByUsers_Seq(userSeq);
        return estimateEntities.stream().map(EstimateEntity::toDto).collect(Collectors.toList());
    }

}
