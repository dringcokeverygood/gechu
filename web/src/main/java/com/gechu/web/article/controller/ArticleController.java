package com.gechu.web.article.controller;

import com.gechu.web.article.dto.ArticleDto;
import com.gechu.web.article.service.ArticleService;
import com.gechu.web.awss3.service.AwsS3Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/articles")
@Slf4j
public class ArticleController {

    private final ArticleService articleService;
    private final AwsS3Service awsS3Service;

    @GetMapping("/{articleSeq}")
    public ResponseEntity<?> findArticle(@PathVariable("articleSeq") Long articleSeq) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {
            ArticleDto article = articleService.findArticle(articleSeq);
            resultMap.put("article", article);
            resultMap.put("success", true);
            status = HttpStatus.OK;
        }  catch (Exception e) {
            resultMap.put("success", false);
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(resultMap, status);
    }
    @PostMapping
    public ResponseEntity<?> insertArticle(@RequestBody ArticleDto articleDto, @RequestParam("file") MultipartFile multipartFiles) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {
            String url = awsS3Service.uploadFile(multipartFiles);
            articleDto.setImageUrl(url);
            articleService.insertArticle(articleDto);

            resultMap.put("success", true);
            status = HttpStatus.OK;
        }  catch (Exception e) {
            e.printStackTrace();
            resultMap.put("success", false);
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(resultMap, status);
    }
}
