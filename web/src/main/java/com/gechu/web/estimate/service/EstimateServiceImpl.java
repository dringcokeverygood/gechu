package com.gechu.web.estimate.service;

import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.estimate.entity.EstimateEntity;
import com.gechu.web.estimate.repository.EstimateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EstimateServiceImpl implements EstimateService{

    private final EstimateRepository estimateRepository;
    @Override
    public void insertEstimate(EstimateDto estimateDto) {
        estimateRepository.save(EstimateEntity.builder()
                .userSeq(estimateDto.getUserSeq())
                .gameSeq(estimateDto.getGameSeq())
                .like(estimateDto.getLike())
                .build());
    }

    @Override
    public String getLikeForGame(Long gameSeq) {
        EstimateEntity estimateEntity = estimateRepository.findBySeq(gameSeq)
                .orElseThrow(() -> new IllegalArgumentException("일치하는 평가 정보가 없습니다."));

        return estimateEntity.getLike();
    }
}
