package com.gechu.web.estimate.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.estimate.entity.EstimateEntity;
import com.gechu.web.estimate.repository.EstimateRepository;
import com.gechu.web.review.dto.ReviewResponseDto;

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
        EstimateEntity estimateEntity = estimateRepository.findByGameSeqAndUsers_SeqOrderBySeqDesc(estimateDto.getGameSeq(),
                estimateDto.getUserSeq());

        if (estimateEntity != null) {
            estimateEntity.updateUserLike(estimateDto.getLike());
            return estimateEntity.getSeq();
        }

        EstimateEntity save = estimateRepository.save(EstimateDto.toEntity(estimateDto));
        return save.getSeq();
    }

    @Override
    public List<ReviewResponseDto> findReviewsByGameSeqAndUserLikeNot(Long gameSeq, String userLike) {
        List<EstimateEntity> estimateEntities = null;
        estimateEntities = estimateRepository.findEstimatesByGameSeqAndUserLikeNotOrderBySeqDesc(gameSeq, userLike);
        if (estimateEntities.size() == 0) {
            return new ArrayList<>();
        }

        return estimateEntities.stream().filter(e -> e.getReviewEntity() != null).map(EstimateEntity::toReviewResponseDto).collect(Collectors.toList());
    }

    @Override
    public List<EstimateDto> findEstimatesByGameSeqAndUserLikeNot(Long gameSeq, String userLike) {
        List<EstimateEntity> estimateEntities = null;
        estimateEntities = estimateRepository.findEstimatesByGameSeqAndUserLikeNotOrderBySeqDesc(gameSeq, userLike);
        if (estimateEntities.size() == 0) {
            return new ArrayList<>();
        }

        return estimateEntities.stream().map(EstimateEntity::toDto).collect(Collectors.toList());
    }

    public List<EstimateDto> findEstimatesWhereReviewIsNotNullByUserSeq(Long userSeq) {
        List<EstimateEntity> estimateEntities = estimateRepository.findByUsers_SeqOrderBySeqDesc(userSeq);
        return estimateEntities.stream()
                .filter(e -> e.getReviewEntity() != null)
                .map(EstimateEntity::toDto)
                .collect(Collectors.toList());
    }

    public List<EstimateDto> findEstimatesByUserSeq(Long userSeq) {
        List<EstimateEntity> estimateEntities = estimateRepository.findByUsers_SeqOrderBySeqDesc(userSeq);
        return estimateEntities.stream().map(EstimateEntity::toDto).collect(Collectors.toList());
    }

    @Override
    public EstimateDto findEstimateByUserSeqAndGameSeq(Long userSeq, Long gameSeq) {
        EstimateEntity estimateEntity = estimateRepository.findByGameSeqAndUsers_SeqOrderBySeqDesc(gameSeq, userSeq);
        return EstimateEntity.toDto(estimateEntity);
    }

}
