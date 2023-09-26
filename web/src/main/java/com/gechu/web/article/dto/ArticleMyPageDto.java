package com.gechu.web.article.dto;

import com.gechu.web.article.entity.ArticleEntity;
import lombok.*;

import java.time.LocalDateTime;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ArticleMyPageDto {
    private Long gameSeq;
    private String gameTitle;
    private String gameTitleImageUrl;
    private final String type = "articles";
    private Long itemSeq;   // articleSeq
    private String title;
    private String content;
    private LocalDateTime createDate;
    private final String like = null;

    public static ArticleEntity toEntity(ArticleMyPageDto articleMyPageDto){
        if(articleMyPageDto==null)return null;
        return ArticleEntity.builder()
                .seq(articleMyPageDto.getItemSeq())
                .gameSeq(articleMyPageDto.getGameSeq())
                .articleTitle(articleMyPageDto.getTitle())
                .articleContent(articleMyPageDto.getContent())
                .imageUrl(articleMyPageDto.getGameTitleImageUrl())
                .createDate(articleMyPageDto.getCreateDate())
                .build();

    }
}
