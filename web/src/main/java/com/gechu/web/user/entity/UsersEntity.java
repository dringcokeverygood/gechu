package com.gechu.web.user.entity;

import com.gechu.web.article.entity.ArticleEntity;
import com.gechu.web.comment.entity.CommentEntity;
import com.gechu.web.estimate.entity.EstimateEntity;
import com.gechu.web.user.dto.UserProfileDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.CascadeType.ALL;

@Entity
@Getter
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
    public UsersEntity(Long seq, String userId, String nickName, String imageUrl) {
        this.seq = seq;
        this.userId = userId;
        this.nickName = nickName;
        this.imageUrl = imageUrl;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public void setProfiles(String nickName, String userId, Role role) {
        this.nickName = nickName;
        this.userId = userId;
        this.role = role;
    }

    public UsersEntity updateNickName(String name) {
        this.nickName = name;
        return this;
    }

    public String getRoleKey() {
        return this.role.getKey();
    }

    public static UserProfileDto toDto(UsersEntity users) {
        return UserProfileDto.builder()
            .imageUrl(users.getImageUrl())
            .seq(users.getSeq())
            .nickName(users.getNickName())
            .userId(users.getUserId())
            .build();
    }
}