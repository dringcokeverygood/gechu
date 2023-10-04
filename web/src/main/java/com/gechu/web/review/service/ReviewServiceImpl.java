package com.gechu.web.review.service;

import com.fasterxml.jackson.databind.ObjectMapper;
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

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final EstimateRepository estimateRepository;

    ObjectMapper objectMapper = new ObjectMapper();
    private final Logger logger = LoggerFactory.getLogger(this.getClass().getSimpleName());

    @Override
    public void insertReview(ReviewDto reviewDto) {

        EstimateEntity estimate = estimateRepository.findById(reviewDto.getEstimateSeq())
                .orElseThrow(() -> new IllegalArgumentException("Invalid estimateSeq: " + reviewDto.getEstimateSeq()));
        reviewDto.setGameSeq(estimate.getGameSeq()); // gameSeq 설정
        reviewDto.setUserSeq(estimate.getUsers().getSeq()); // userSeq 설정

        Map<String, Object> logMap = new HashMap<>();
        logMap.put("Text", reviewDto.getText());
        logMap.put("EstimateSeq", reviewDto.getEstimateSeq());
        logMap.put("GameSeq", reviewDto.getGameSeq());
        logMap.put("UserSeq", reviewDto.getUserSeq());

        try {
            String logJson = objectMapper.writeValueAsString(logMap);
            logger.info(logJson);
        } catch (Exception e) {
            logger.error("Error converting log message to JSON", e);
        }


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

    @Override
    public void metaCriticReviews(String gameSlug, String reviews) {
        Map<String, Object> logMap = new HashMap<>();
        logMap.put("gameSlug", gameSlug);
        logMap.put("reviews", reviews);

        try {
            String logJson = objectMapper.writeValueAsString(logMap);
            logger.info(logJson);
        } catch (Exception e) {
            logger.error("Error converting log message to JSON", e);
        }
    }
}
