package com.gechu.web.review.dto;

import com.gechu.web.review.entity.ReviewEntity;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDto {
    private Long seq;
    private Long estimateSeq;
    private String text;
    private String like;
//    private UserDto writer;

    public static ReviewEntity toEntity(ReviewDto reviewDto) {
        if(reviewDto == null) {
            return null;
        }

        return ReviewEntity.builder()
                .seq(reviewDto.getSeq())
                .text(reviewDto.getText())
                .estimateSeq(reviewDto.getEstimateSeq())
                .build();
    }
}
