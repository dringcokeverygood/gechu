package com.gechu.web.estimate.dto;

import java.time.LocalDateTime;

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
    private Long reviewSeq;
    private String reviewText;
    private LocalDateTime reviewDate;

    public static EstimateEntity toEntity(EstimateDto estimateDto) {
        if(estimateDto == null) {
            return null;
        }
        return EstimateEntity.builder()
                .users(UsersEntity.builder().seq(estimateDto.getUserSeq()).build())
                .gameSeq(estimateDto.getGameSeq())
                .userLike(estimateDto.getLike())
                .build();
    }
}
