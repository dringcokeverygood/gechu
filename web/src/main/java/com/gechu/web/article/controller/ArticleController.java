package com.gechu.web.article.controller;

import com.gechu.web.article.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;
    
    @GetMapping("/articles/{articleSeq}")
    public ResponseEntity<?> findArticle(Long articleSeq) {

    }
    @PostMapping("")
    public ResponseEntity<?> insertArticle(){

    }
}
