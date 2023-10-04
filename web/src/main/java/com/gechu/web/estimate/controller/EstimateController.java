package com.gechu.web.estimate.controller;

import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.estimate.service.EstimateService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/estimates")
@Slf4j
public class EstimateController {

	private final EstimateService estimateService;

	@PostMapping
	public ResponseEntity<?> upsertEstimate(@RequestBody EstimateDto estimateDto) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;
		try {
			Long estimateSeq = estimateService.upsertEstimate(estimateDto);
			resultMap.put("estimateSeq", estimateSeq);
			resultMap.put("success", true);
			log.info("{}번 유저의 {}번 게임 평가 정보 등록: {}", estimateDto.getUserSeq(), estimateDto.getGameSeq(),
				estimateDto.getLike());
			status = HttpStatus.CREATED;
		} catch (Exception e) {
			resultMap.put("success", false);
			resultMap.put("message", "서버 오류");
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<>(resultMap, status);
	}

	@GetMapping("/{gameSeq}")
	public ResponseEntity<?> findEstimateByGameSeqAndUserSeq(@PathVariable("gameSeq") Long gameSeq, @RequestParam("userSeq") Long userSeq) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;
		try {
			EstimateDto estimateDto = estimateService.findEstimateByUserSeqAndGameSeq(userSeq, gameSeq);
			resultMap.put("estimate", estimateDto);
			resultMap.put("success", true);
			log.info("{}번 유저의 {}번 게임 estimate 호출", userSeq, gameSeq);
			status = HttpStatus.CREATED;
		} catch (Exception e) {
			resultMap.put("success", false);
			resultMap.put("message", "서버 오류");
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<>(resultMap, status);
	}
}
