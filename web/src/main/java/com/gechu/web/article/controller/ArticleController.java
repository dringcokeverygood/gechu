package com.gechu.web.article.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gechu.web.article.dto.ArticleDto;
import com.gechu.web.article.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/articles")
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;

    @GetMapping("/{articleSeq}")
    public ResponseEntity<?> findArticle(@PathVariable Long articleSeq) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {
            ArticleDto dummy = new ArticleDto(articleSeq, articleSeq, (long)1,articleSeq+"번 게시글입니다", "더미내용", "", LocalDateTime.now());
            resultMap.put("article", dummy);
            resultMap.put("success", true);
            status = HttpStatus.OK;
        }  catch (Exception e) {
            e.printStackTrace();
            resultMap.put("success", false);
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(resultMap, status);
    }
    @PostMapping("")
    public ResponseEntity<?> insertArticle(
                @RequestPart("article") String article,
                @RequestPart(value = "file", required = false) MultipartFile file,
                HttpServletRequest request) throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        ArticleDto articleDto = objectMapper.readValue(article, ArticleDto.class);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {
            //토큰 추출

            resultMap.put("success", true);
            status = HttpStatus.CREATED;
        }  catch (Exception e) {
            e.printStackTrace();
            resultMap.put("success", false);
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @PutMapping("")
    public ResponseEntity<?> updateArticle(@RequestBody ArticleDto articleDto, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {

            resultMap.put("success", true);
            status = HttpStatus.OK;
        }  catch (Exception e) {
            e.printStackTrace();
            resultMap.put("success", false);
            status = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @DeleteMapping("")
    public ResponseEntity<?>  deleteArticle(@RequestBody ArticleDto articleDto, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {

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
