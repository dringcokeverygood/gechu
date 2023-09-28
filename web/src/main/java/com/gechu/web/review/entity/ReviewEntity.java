package com.gechu.web.review.entity;

import javax.persistence.*;

import com.gechu.web.estimate.entity.EstimateEntity;
import com.gechu.web.review.dto.ReviewDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

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
    @CreationTimestamp
    private LocalDateTime createDate;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "estimate_seq")
    private EstimateEntity estimate;

    public ReviewDto toDto(ReviewEntity reviewEntity) {
        if (reviewEntity == null) {
            return null;
        }
        return ReviewDto.builder()
                .seq(reviewEntity.getSeq())
                .text(reviewEntity.getText())
                .estimateSeq(estimate.getSeq())
                .gameSeq(estimate.getGameSeq()) // gameSeq 설정
                .userSeq(estimate.getUsers().getSeq()) // userSeq 설정
                .createDate(reviewEntity.getCreateDate())
                .build();
    }

    public void updateEstimateEntity(EstimateEntity estimateEntity) {
        this.estimate = estimateEntity;
    }
}
