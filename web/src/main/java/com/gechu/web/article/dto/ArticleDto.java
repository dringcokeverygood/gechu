package com.gechu.web.article.dto;

import com.gechu.web.article.entity.ArticleEntity;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ArticleDto {

    private Long seq;
    private Long gameSeq;
    private Long userSeq;
    private String userNickname;
    private String articleTitle;
    private String content;
    private String imageUrl;
    private String createDate;

    public static ArticleEntity toEntity(ArticleDto articleDto){
        if(articleDto==null)return null;
        return ArticleEntity.builder()
                .seq(articleDto.getSeq())
                .gameSeq(articleDto.getGameSeq())
//                .users()
                .articleTitle(articleDto.getArticleTitle())
                .articleContent(articleDto.getContent())
                .imageUrl(articleDto.getImageUrl())
//                .createDate(articleDto.getCreateDate())
                .build();

    }
}
