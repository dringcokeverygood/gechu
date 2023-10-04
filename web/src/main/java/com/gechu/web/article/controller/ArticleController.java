package com.gechu.web.article.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gechu.web.article.dto.ArticleDto;
import com.gechu.web.article.dto.ArticleRequestDto;
import com.gechu.web.article.service.ArticleService;
import com.gechu.web.awss3.service.AwsS3Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
        } catch (Exception e) {
            resultMap.put("success", false);
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> insertArticle(@RequestParam("dto") String dto,
        @RequestPart("file") MultipartFile multipartFiles) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
//        ArticleDto articleDto = ArticleRequestDto.toArticleDto(dto);
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            ArticleDto articleDto = objectMapper.readValue(dto, ArticleDto.class);

            log.info("{} file {}", articleDto.toString(), (multipartFiles != null));

            String url = awsS3Service.uploadFile(multipartFiles);
            articleDto.setImageUrl(url);
            articleService.insertArticle(articleDto);

            resultMap.put("success", true);
            status = HttpStatus.OK;
        } catch (Exception e) {
            e.printStackTrace();
            resultMap.put("success", false);
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @PutMapping("/{articleSeq}")
    public ResponseEntity<?> updateArticle(@PathVariable("articleSeq") Long articleSeq, @RequestBody ArticleDto articleDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        articleDto.setSeq(articleSeq);
        try {
            articleService.updateArticle(articleDto);
            resultMap.put("articleSeq", articleSeq);
            resultMap.put("success", true);
            status = HttpStatus.OK;
        } catch (Exception e) {
            e.printStackTrace();
            resultMap.put("success", false);
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @DeleteMapping("/{articleSeq}")
    public ResponseEntity<?> deleteArticle(@PathVariable("articleSeq") Long articleSeq) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            articleService.deleteArticle(articleSeq);
            resultMap.put("articleSeq", articleSeq);
            resultMap.put("success", true);
            status = HttpStatus.OK;
        } catch (Exception e) {
            e.printStackTrace();
            resultMap.put("success", false);
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @GetMapping("/recent")
    public ResponseEntity<?> findRecentArticles() {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try {
            List<ArticleDto> articleDtos = articleService.findRecentArticles();
            resultMap.put("articles", articleDtos);
            resultMap.put("success", true);
            status = HttpStatus.OK;
        } catch (Exception e) {
            e.printStackTrace();
            resultMap.put("success", false);
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(resultMap, status);
    }
}
