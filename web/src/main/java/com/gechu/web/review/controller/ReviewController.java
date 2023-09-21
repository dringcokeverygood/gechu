package com.gechu.web.review.controller;

import com.gechu.web.review.service.ReviewService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

//    @PostMapping
//    public ResponseEntity<> insertReview()
}
