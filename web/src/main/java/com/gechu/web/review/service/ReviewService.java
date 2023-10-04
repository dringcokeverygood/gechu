package com.gechu.web.review.service;

import com.gechu.web.review.dto.ReviewDto;
import org.springframework.stereotype.Service;

@Service
public interface ReviewService {
    public void insertReview(ReviewDto reviewDto);

    public void updateReview(ReviewDto reviewDto);

    public void metaCriticReviews(String gameSlug, String reviews);
}
