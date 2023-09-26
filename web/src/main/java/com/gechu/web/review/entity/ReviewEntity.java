package com.gechu.web.review.entity;

import javax.persistence.*;

import com.gechu.web.estimate.entity.EstimateEntity;
import com.gechu.web.review.dto.ReviewDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "review")
@Builder
public class ReviewEntity {

    @Id
    @GeneratedValue
    private Long seq;
    private String text;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinTable(name = "estimate_seq")
    private EstimateEntity estimateEntity;
    private LocalDateTime createDate;

    public ReviewDto toDto(ReviewEntity reviewEntity) {
        if (reviewEntity == null) {
            return null;
        }
        return ReviewDto.builder()
                .seq(reviewEntity.getSeq())
                .text(reviewEntity.getText())
                .createDate(reviewEntity.getCreateDate())
                .build();
    }

    public void updateEstimateEntity(EstimateEntity estimateEntity) {
        this.estimateEntity = estimateEntity;
    }
}
