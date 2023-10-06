package com.gechu.web.review.controller;

import com.gechu.web.review.dto.ReviewDto;
import com.gechu.web.review.service.ReviewService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public ResponseEntity<?> insertReview(@RequestBody ReviewDto reviewDto, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {
            reviewService.insertReview(reviewDto);
            resultMap.put("success", true);
            status = HttpStatus.OK;
        }  catch (Exception e) {
            resultMap.put("success", false);
            resultMap.put("message", "게시글 등록 실패");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @PostMapping("/crawl")
    public void insertMetaCriticReview(@RequestBody Map<String, Object> map) {
        String gameSlug = (String)map.get("gameSlug");
        String reviews = (String)map.get("reviews");

        reviewService.metaCriticReviews(gameSlug, reviews);
    }

    @PutMapping
    public ResponseEntity<?> updateReview(@RequestBody ReviewDto reviewDto, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {
            reviewService.updateReview(reviewDto);
            resultMap.put("success", true);
            status = HttpStatus.CREATED;
        }  catch (Exception e) {
            resultMap.put("success", false);
            resultMap.put("message", "게시글 등록 실패");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @DeleteMapping("/{reviewSeq}")
    public ResponseEntity<?> deleteReview(@PathVariable("reviewSeq") Long reviewSeq) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {
            reviewService.deleteReview(reviewSeq);
            resultMap.put("success", true);
            status = HttpStatus.CREATED;
        }  catch (Exception e) {
            resultMap.put("success", false);
            resultMap.put("message", "리뷰 삭제 실패");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap, status);
    }
}
