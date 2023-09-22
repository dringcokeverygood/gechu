package com.gechu.web.estimate.dto;

import com.gechu.web.estimate.entity.EstimateEntity;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EstimateDto {
    private Long seq;
    private Long userSeq;
    private Long gameSeq;
    private String like;

    public EstimateEntity toEntity(EstimateDto estimateDto) {
        if(estimateDto == null) {
            return null;
        }
        return EstimateEntity.builder()
                .seq(estimateDto.getSeq())
                .userSeq(estimateDto.getUserSeq())
                .gameSeq(estimateDto.getGameSeq())
                .like(estimateDto.getLike())
                .build();
    }
}
