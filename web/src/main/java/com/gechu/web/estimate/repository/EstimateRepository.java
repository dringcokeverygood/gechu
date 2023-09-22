package com.gechu.web.estimate.repository;

import com.gechu.web.estimate.entity.EstimateEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EstimateRepository extends JpaRepository<EstimateEntity, Long> {
    Optional<EstimateEntity> findBySeq(Long seq);
}
