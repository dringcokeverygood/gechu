package com.gechu.web.elasticsearch.controller;

import com.gechu.web.article.dto.ArticlePreViewDto;
import com.gechu.web.article.service.ArticleServiceImpl;
import com.gechu.web.elasticsearch.service.ElasticsearchService;
import com.gechu.web.game.dto.GameResponseDto;
import com.gechu.web.game.service.GameServiceClient;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/elasticsearch")
@RequiredArgsConstructor
public class ElasticsearchController {

    private final ElasticsearchService elasticsearchService;
    private final GameServiceClient gameServiceClient;
    private final ArticleServiceImpl articleService;

    @GetMapping("/games")
    public ResponseEntity<Map<String, Object>> getTopGameBySearchWord(@RequestParam String searchWord) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {
            List<String> topGameSlugs = elasticsearchService.getTopGameBySearchWord(searchWord);
            List<GameResponseDto> gameResponseDto = gameServiceClient.findGamesBySlugs(topGameSlugs);
            resultMap.put("success", true);
            resultMap.put("games", gameResponseDto);
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("success", false);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(resultMap, status);
    }

    @GetMapping("/articles")
    public ResponseEntity<Map<String, Object>> getArticleBySearchWord(@RequestParam String searchWord) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {
            List<Long> articles = elasticsearchService.getArticleBySearchWord(searchWord);
            List<ArticlePreViewDto> articleDtos = articleService.findArticlesBySeq(articles);
            resultMap.put("success", true);
            resultMap.put("articles", articleDtos);
            status = HttpStatus.OK;
        } catch (Exception e) {
            resultMap.put("success", false);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(resultMap, status);
    }
}
