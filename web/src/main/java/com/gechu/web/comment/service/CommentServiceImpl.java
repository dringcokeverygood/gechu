package com.gechu.web.comment.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.gechu.web.comment.dto.CommentDto;
import com.gechu.web.comment.dto.CommentResponseDto;
import com.gechu.web.comment.entity.CommentEntity;
import com.gechu.web.comment.repository.CommentRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommentServiceImpl implements CommentService {

	private final CommentRepository commentRepository;

	@Override
	public Long insertComment(CommentDto comment) {
		CommentEntity commentEntity = commentRepository.save(CommentDto.toEntity(comment));
		return commentEntity.getSeq();
	}

	@Override
	public List<CommentResponseDto> findCommentsByArticleSeq(Long articleSeq) {
		List<CommentEntity> commentEntities = commentRepository.findByArticleSeq(articleSeq);

		return commentEntities.stream().filter(c -> c.getDeleted().equals("false")).map(CommentEntity::toResponseDto).collect(
			Collectors.toList());
	}

	@Override
	public List<CommentResponseDto> findCommentsByUserSeq(Long userSeq) {
		List<CommentEntity> commentEntities = commentRepository.findByUsers_Seq(userSeq);

		return commentEntities.stream().filter(c -> c.getDeleted().equals("false")).map(CommentEntity::toResponseDto).collect(
			Collectors.toList());
	}

	@Override
	@Transactional
	public Long deleteComment(Long commentSeq) {
		CommentEntity commentEntity = commentRepository.findById(commentSeq).orElseThrow(() -> {
			throw new IllegalArgumentException("데이터가 존재하지 않습니다. CommentSeq: " + commentSeq);
		});
		commentEntity.deleteComment();
		return commentEntity.getSeq();
	}
}
