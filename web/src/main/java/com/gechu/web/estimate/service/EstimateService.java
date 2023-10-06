package com.gechu.web.estimate.service;

import java.util.List;

import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.review.dto.ReviewResponseDto;

import org.springframework.stereotype.Service;

@Service
public interface EstimateService {

    Long upsertEstimate(EstimateDto estimateDto);
    List<ReviewResponseDto> findReviewsByGameSeqAndUserLikeNot(Long gameSeq, String userLike);
    List<EstimateDto> findEstimatesByGameSeqAndUserLikeNot(Long gameSeq, String userLike);

    public List<EstimateDto> findEstimatesWhereReviewIsNotNullByUserSeq(Long userSeq);
    public List<EstimateDto> findEstimatesByUserSeq(Long userSeq);

    public EstimateDto findEstimateByUserSeqAndGameSeq(Long userSeq, Long gameSeq);
}
