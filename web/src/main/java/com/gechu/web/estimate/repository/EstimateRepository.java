package com.gechu.web.estimate.repository;

import com.gechu.web.estimate.entity.EstimateEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EstimateRepository extends JpaRepository<EstimateEntity, Long> {
    List<EstimateEntity> findEstimatesByGameSeqAndUserLikeNotOrderBySeqDesc(Long seq, String userLike);
    List<EstimateEntity> findByUsers_SeqOrderBySeqDesc(Long seq);

    EstimateEntity findByGameSeqAndUsers_SeqOrderBySeqDesc(Long gameSeq, Long userSeq);
}
