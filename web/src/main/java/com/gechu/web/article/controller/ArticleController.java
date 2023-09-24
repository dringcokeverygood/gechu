package com.gechu.web.article.controller;

import com.gechu.web.article.dto.ArticleDto;
import com.gechu.web.article.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
            ArticleDto dummy = new ArticleDto(articleSeq, articleSeq, (long)1, "김게추", articleSeq+"번 게시글입니다", "더미내용", "", LocalDateTime.now());
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
    public ResponseEntity<?> insertArticle(){
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
