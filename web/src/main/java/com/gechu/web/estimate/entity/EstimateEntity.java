package com.gechu.web.estimate.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.gechu.web.estimate.dto.EstimateDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "estimate")
@Builder
public class EstimateEntity {

    @Id
    @GeneratedValue
    private Long seq;
    private Long userSeq;
    private Long gameSeq;
    private String like;

    public EstimateDto toDto(EstimateEntity estimateEntity) {
        if(estimateEntity == null) {
            return null;
        }
        return EstimateDto.builder()
                .seq(estimateEntity.getSeq())
                .userSeq(estimateEntity.getUserSeq())
                .gameSeq(estimateEntity.getGameSeq())
                .like(estimateEntity.getLike())
                .build();
    }
}

