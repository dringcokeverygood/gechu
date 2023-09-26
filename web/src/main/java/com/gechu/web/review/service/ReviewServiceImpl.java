package com.gechu.web.review.service;

import com.gechu.web.review.dto.ReviewDto;
import com.gechu.web.review.entity.ReviewEntity;
import com.gechu.web.review.repository.ReviewRepository;
import com.gechu.web.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{

    private final UserRepository userRepository;

    private final ReviewRepository reviewRepository;

    @Override
    public void insertReview(ReviewDto reviewDto) {

        reviewRepository.save(ReviewDto.toEntity(reviewDto));
    }

    @Override
    public void updateReview(ReviewDto reviewDto) {
        reviewRepository.save(ReviewDto.toEntity(reviewDto));
    }
}
