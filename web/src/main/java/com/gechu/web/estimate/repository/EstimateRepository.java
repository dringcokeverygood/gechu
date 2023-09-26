package com.gechu.web.estimate.repository;

import com.gechu.web.estimate.entity.EstimateEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EstimateRepository extends JpaRepository<EstimateEntity, Long> {
    List<EstimateEntity> findByGameSeq(Long seq);

    EstimateEntity findByGameSeqAndUsers_Seq(Long gameSeq, Long userSeq);

    List<EstimateEntity> findByUsers_Seq(Long userSeq);
}
