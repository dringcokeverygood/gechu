package com.gechu.web.article.entity;

import javax.persistence.*;

import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.user.entity.UsersEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor @AllArgsConstructor
@Entity
@Table(name = "article")
@Builder
public class ArticleEntity {

    @Id
    @GeneratedValue
    private Long seq;
    private Long gameSeq;

    @ManyToOne
    @JoinColumn(name = "user_seq")
    private UsersEntity users;

    private String imageUrl;
    private String articleTitle;
    private String articleContent;
    private LocalDateTime createDate;
    private String deleted;
}

