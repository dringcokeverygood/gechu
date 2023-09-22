package com.gechu.web.estimate.dto;

import com.gechu.web.estimate.entity.EstimateEntity;
import com.gechu.web.user.entity.UsersEntity;
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

    public EstimateEntity toEntity(EstimateDto estimateDto, UsersEntity userEntity) {
        if(estimateDto == null) {
            return null;
        }
        return EstimateEntity.builder()
                .seq(estimateDto.getSeq())
                .users(userEntity)
                .gameSeq(estimateDto.getGameSeq())
                .userLike(estimateDto.getLike())
                .build();
    }
}
