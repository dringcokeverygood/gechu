package com.gechu.web.estimate.service;

import com.gechu.web.estimate.dto.EstimateDto;
import org.springframework.stereotype.Service;

@Service
public interface EstimateService {

    void insertEstimate(EstimateDto estimateDto);

    String getLikeForGame(Long gameSeq);
}
