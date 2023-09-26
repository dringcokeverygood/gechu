package com.gechu.web.article.entity;

import javax.persistence.*;

import com.gechu.web.article.dto.ArticleDto;
import com.gechu.web.article.dto.ArticlePreViewDto;
import com.gechu.web.comment.entity.CommentEntity;
import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.user.entity.UsersEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

@Getter
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "article")
public class ArticleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long seq;
    private Long gameSeq;
    private String imageUrl;
    private String articleTitle;
    private String articleContent;
    @CreationTimestamp
    private LocalDateTime createDate;
    @ColumnDefault("false")
    private String deleted;

    @ManyToOne
    @JoinColumn(name = "user_seq")
    private UsersEntity users;

    @OneToMany(mappedBy = "article")
    private List<CommentEntity> comments = new ArrayList<>();

    @Builder
    public ArticleEntity(Long gameSeq, String imageUrl, String articleTitle, String articleContent,
        LocalDateTime createDate, String deleted) {
        this.gameSeq = gameSeq;
        this.imageUrl = imageUrl;
        this.articleTitle = articleTitle;
        this.articleContent = articleContent;
        this.createDate = createDate;
        this.deleted = deleted;
    }

    public static ArticleDto toDto(ArticleEntity articleEntity) {
        return ArticleDto.builder()
            .seq(articleEntity.getSeq())
            .gameSeq(articleEntity.getGameSeq())
            .userSeq(articleEntity.getUsers().getSeq())
            .articleTitle(articleEntity.getArticleTitle())
            .content(articleEntity.getArticleContent())
            .imageUrl(articleEntity.getImageUrl())
            .createDate(articleEntity.getCreateDate())
            .build();
    }

    public static ArticlePreViewDto toPreviewDto(ArticleEntity articleEntity) {
        return ArticlePreViewDto.builder()
            .seq(articleEntity.getSeq())
            .gameSeq(articleEntity.getGameSeq())
            .userProfile(UsersEntity.toDto(articleEntity.getUsers()))
            .articleTitle(articleEntity.getArticleTitle())
            .commentCount(articleEntity.getComments().size())
            .imageUrl(articleEntity.getImageUrl())
            .createDate(articleEntity.getCreateDate())
            .build();
    }

    public void updateUser(UsersEntity user) {
        this.users = user;
    }
}