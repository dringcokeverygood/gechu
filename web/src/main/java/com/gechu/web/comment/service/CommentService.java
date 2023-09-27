package com.gechu.web.comment.service;

import java.util.List;

import com.gechu.web.comment.dto.CommentDto;
import com.gechu.web.comment.dto.CommentResponseDto;

public interface CommentService {
	public Long insertComment(CommentDto comment);
	public List<CommentResponseDto> findCommentsByArticleSeq(Long articleSeq);
	public List<CommentResponseDto> findCommentsByUserSeq(Long userSeq);
	public Long deleteComment(Long commentSeq);
}
