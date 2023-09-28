package com.gechu.web.review.service;

import com.gechu.web.estimate.entity.EstimateEntity;
import com.gechu.web.estimate.repository.EstimateRepository;
import com.gechu.web.review.dto.ReviewDto;
import com.gechu.web.review.entity.ReviewEntity;
import com.gechu.web.review.repository.ReviewRepository;
import com.gechu.web.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{

    private final UserRepository userRepository;

    private final ReviewRepository reviewRepository;
    private final EstimateRepository estimateRepository;
    private final Logger logger = LoggerFactory.getLogger(this.getClass().getSimpleName());

    @Override
    public void insertReview(ReviewDto reviewDto) {

        EstimateEntity estimate = estimateRepository.findById(reviewDto.getEstimateSeq())
                        .orElseThrow(() -> new IllegalArgumentException("Invalid estimateSeq: " + reviewDto.getEstimateSeq()));
        reviewDto.setGameSeq(estimate.getGameSeq()); // gameSeq 설정
        reviewDto.setUserSeq(estimate.getUsers().getSeq()); // userSeq 설정

        logger.info("Text : " + reviewDto.getText() + " / EstimateSeq : " + reviewDto.getEstimateSeq() + " / GameSeq : " + reviewDto.getGameSeq() + " / UserSeq : " + reviewDto.getUserSeq());

        reviewRepository.save(ReviewDto.toEntity(reviewDto));
    }

    @Override
    public void updateReview(ReviewDto reviewDto) {

        EstimateEntity estimate = estimateRepository.findById(reviewDto.getEstimateSeq())
                .orElseThrow(() -> new IllegalArgumentException("Invalid estimateSeq: " + reviewDto.getEstimateSeq()));
        reviewDto.setGameSeq(estimate.getGameSeq()); // gameSeq 설정
        reviewDto.setUserSeq(estimate.getUsers().getSeq()); // userSeq 설정

        logger.info("Text : " + reviewDto.getText() + " / EstimateSeq : " + reviewDto.getEstimateSeq() + " / GameSeq : " + reviewDto.getGameSeq() + " / UserSeq : " + reviewDto.getUserSeq());

        reviewRepository.save(ReviewDto.toEntity(reviewDto));
    }
}
