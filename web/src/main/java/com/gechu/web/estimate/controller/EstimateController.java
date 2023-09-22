package com.gechu.web.estimate.controller;

import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.estimate.service.EstimateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/estimates")
public class EstimateController {

    private final EstimateService estimateService;

    @PostMapping("")
    public ResponseEntity<?> insertEstimate(@RequestBody EstimateDto estimateDto, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {
            // jwtService에서 resolveAccessToken이 Bearer prefix를 제거한 accessToken을 리턴해줌
//            String accessToken = jwtService.resolveAccessToken(request.getHeader("Authorization"));
//            estimateDto.setUserSeq(jwtService.getUserInfo(accessToken).getSeq());
//            estimateDto.setUserSeq((long)1);
//            estimateService.insertEstimate(estimateDto);
            resultMap.put("success", true);
            status = HttpStatus.CREATED;
        } catch (Exception e) {
            resultMap.put("success", false);
            resultMap.put("message", "서버 오류");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(resultMap, status);
    }

    @GetMapping("")
    public String getLikeForGame(Long gameSeq) {
//        return estimateService.getLikeForGame(gameSeq);
        return "like";
    }
}
