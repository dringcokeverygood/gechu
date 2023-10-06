package com.gechu.web.comment.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gechu.web.comment.dto.CommentDto;
import com.gechu.web.comment.dto.CommentResponseDto;
import com.gechu.web.comment.service.CommentService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/comments")
@RequiredArgsConstructor
@Slf4j
public class CommentController {

	private final CommentService commentService;

	@PostMapping
	public ResponseEntity<?> insertComment(@RequestBody CommentDto commentDto) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;
		try {
			Long commentSeq = commentService.insertComment(commentDto);
			resultMap.put("commentSeq", commentSeq);
			resultMap.put("success", true);
			status = HttpStatus.CREATED;
		} catch (Exception e) {
			resultMap.put("success", false);
			status = HttpStatus.BAD_GATEWAY;
		}
		return new ResponseEntity<>(resultMap, status);
	}

	@GetMapping
	public ResponseEntity<?> findCommentsByArticleSeq(@RequestParam("articleSeq") Long articleSeq) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;
		try {
			List<CommentResponseDto> commentResponseDtos = commentService.findCommentsByArticleSeq(articleSeq);
			resultMap.put("comments", commentResponseDtos);
			resultMap.put("success", true);
			status = HttpStatus.OK;
		} catch (Exception e) {
			resultMap.put("success", false);
			status = HttpStatus.BAD_GATEWAY;
		}
		return new ResponseEntity<>(resultMap, status);
	}

	@DeleteMapping("/{commentSeq}")
	public ResponseEntity<?> deleteComment(@PathVariable("commentSeq") Long commentSeq) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;
		try {
			commentService.deleteComment(commentSeq);
			resultMap.put("commentSeq", commentSeq);
			resultMap.put("success", true);
			status = HttpStatus.OK;
		} catch (Exception e) {
			resultMap.put("success", false);
			status = HttpStatus.BAD_GATEWAY;
		}
		return new ResponseEntity<>(resultMap, status);
	}
}
