package com.gechu.web.comment.entity;

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
@Table(name = "comment")
@Builder
public class CommentEntity {

    @Id
    @GeneratedValue
    private Long seq;
    private Long articleSeq;

    @ManyToOne
    @JoinColumn(name = "user_seq")
    private UsersEntity users;

    private String content;
    private LocalDateTime createDate;
    private String deleted;
}

