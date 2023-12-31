package com.gechu.web.game.service;

import org.springframework.stereotype.Service;
import com.gechu.web.game.dto.GameDetailDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface GameService {
    public GameDetailDto findGameDetails(Long seq);
//    public List<ArticleDto> findArticlesByGameSeq(Long seq);
//    public ReviewEstimationDto findReviewEstimationsByGameSeq(Long seq);
}
