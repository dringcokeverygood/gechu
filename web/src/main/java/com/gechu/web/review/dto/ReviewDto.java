package com.gechu.web.review.dto;

import com.gechu.web.review.entity.ReviewEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDto {
    private Long seq;
    private Long estimateSeq;
    private String text;
    private LocalDateTime createDate;

    public static ReviewEntity toEntity(ReviewDto reviewDto) {
        if(reviewDto == null) {
            return null;
        }

        return ReviewEntity.builder()
                .seq(reviewDto.getSeq())
                .text(reviewDto.getText())
                .estimateSeq(reviewDto.getEstimateSeq())
                .createDate(reviewDto.getCreateDate())
                .build();
    }
}
