package com.gechu.web.estimate.service;

import java.util.List;

import com.gechu.web.estimate.dto.EstimateDto;
import org.springframework.stereotype.Service;

@Service
public interface EstimateService {

    Long upsertEstimate(EstimateDto estimateDto);
    List<EstimateDto> findEstimatesByGameSeqAndUserLikeNot(Long gameSeq, String userLike);

    public List<EstimateDto> findEstimatesWhereReviewIsNotNullByUserSeq(Long userSeq);
    public List<EstimateDto> findEstimatesByUserSeq(Long userSeq);
}
