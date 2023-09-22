package com.gechu.web.user.entity;

import com.gechu.web.article.entity.ArticleEntity;
import com.gechu.web.comment.entity.CommentEntity;
import com.gechu.web.estimate.entity.EstimateEntity;
import com.gechu.web.review.entity.ReviewEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.CascadeType.ALL;

@Entity
@Getter @Setter
@Table(name = "users")
@NoArgsConstructor
public class UsersEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long seq;

    private String userId;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "users", cascade = ALL, orphanRemoval = true)
    private List<EstimateEntity> estimateList = new ArrayList<EstimateEntity>();

    @OneToMany(mappedBy = "users", cascade = ALL, orphanRemoval = true)
    private List<ArticleEntity> articleList = new ArrayList<ArticleEntity>();

    @OneToMany(mappedBy = "users", cascade = ALL, orphanRemoval = true)
    private List<CommentEntity> commentList = new ArrayList<CommentEntity>();

    private String nickName;
    private String imageUrl;

    @Builder
    public UsersEntity(String userId, String nickName, LocalDateTime createDate, LocalDateTime deleteDate, String imageUrl, String deleted) {
        this.userId = userId;
        this.nickName = nickName;
        this.imageUrl = imageUrl;
    }

    public UsersEntity update(String name) {
        this.nickName = name;
        return this;
    }

    public String getRoleKey() {
        return this.role.getKey();
    }
}