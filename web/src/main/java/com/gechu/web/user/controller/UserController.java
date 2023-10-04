package com.gechu.web.user.controller;

import com.gechu.web.article.dto.ArticleMyPageDto;
import com.gechu.web.article.service.ArticleService;
import com.gechu.web.awss3.service.AwsS3Service;
import com.gechu.web.comment.dto.CommentResponseDto;
import com.gechu.web.comment.service.CommentService;
import com.gechu.web.estimate.dto.EstimateDto;
import com.gechu.web.estimate.service.EstimateService;
import com.gechu.web.game.dto.GameResponseDto;
import com.gechu.web.game.service.GameServiceClient;
import com.gechu.web.user.dto.UserProfileDto;
import com.gechu.web.user.dto.UserUpdateDto;
import com.gechu.web.user.entity.UsersEntity;
import com.gechu.web.user.service.UserService;
import com.gechu.web.user.util.JwtToken;
import com.gechu.web.user.util.JwtTokenProvider;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import reactor.core.publisher.Mono;

import java.util.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
@Slf4j
public class UserController {

	private final UserService userService;
	private final EstimateService estimateService;
	private final ArticleService articleService;
	private final GameServiceClient gameServiceClient;
	private final CommentService commentService;
	private final AwsS3Service awsS3Service;
	private final JwtTokenProvider jwtTokenProvider;

	@Value("${jwt.secret}")
	private String SECRET_KEY;

	@PostMapping("/login")
	public ResponseEntity<JwtToken> loginSuccess(@RequestBody Map<String, String> loginForm) {
		JwtToken token = userService.login(loginForm.get("username"), loginForm.get("password"));
		return ResponseEntity.ok(token);
	}

	@PostMapping("/auth")
	public Mono<ResponseEntity<?>> authenticateWithProvider(@RequestParam String code, HttpServletRequest request) {

		Enumeration<String> headerNames = request.getHeaderNames();

		if (code == null || code.isEmpty()) {
			return Mono.just(ResponseEntity.badRequest().body("인가 코드가 비어있습니다"));
		}

		try {
			return authenticateWithKakao(code);
		} catch (Exception e) {
			log.info("에러 터짐");
		}

		return Mono.just(ResponseEntity.badRequest().body("카카오 로그인만 가능합니다."));
	}

	@PostMapping("/api/web/auth")
	public Mono<ResponseEntity<?>> authenticateWithProvider2(@RequestParam String code, HttpServletRequest request) {
		//        String code = authData.get("code");

		Enumeration<String> headerNames = request.getHeaderNames();

		log.info("게이트웨이를 거치지 않은 요청의 헤더 목록 시작");
		while (headerNames.hasMoreElements()) {
			String headerName = headerNames.nextElement();
			log.info("{}: {}", headerName, request.getHeader(headerName));
		}
		log.info("게이트웨이를 거치지 않은 요청의 헤더 목록 종료");

		if (code == null || code.isEmpty()) {
			return Mono.just(ResponseEntity.badRequest().body("인가 코드가 비어있습니다"));
		}

		return authenticateWithKakao(code);
	}

	private Mono<ResponseEntity<?>> authenticateWithKakao(String code) {
		return userService.getTokenFromKakao(code)
				.flatMap(tokens -> {
					String accessToken = tokens.get("accessToken");
					String refreshToken = tokens.get("refreshToken");

					if (accessToken == null) {
						return Mono.just(ResponseEntity.badRequest().body("카카오로부터 액세스 토큰을 얻는데 실패했습니다."));
					}

					log.info("accessToken: {}", accessToken);

					// 액세스 토큰을 이용하여 사용자 정보 가져오기
					return userService.getUserInfoFromKakao(accessToken)
							.flatMap(userInfo -> {
								if (userInfo == null) {
									return Mono.just(ResponseEntity.badRequest().body("카카오로부터 사용자 정보를 불러오는데 실패했습니다."));
								}

								// DTO or Map을 사용해서 응답 데이터를 구성
								Map<String, Object> responseData = new HashMap<>();
								responseData.put("accessToken", accessToken);
								responseData.put("refreshToken", refreshToken);
								responseData.put("userInfo", userInfo);
								responseData.put("userSeq", userInfo.getSeq());

								return Mono.just(ResponseEntity.ok(responseData));
							});
				});
	}

	@GetMapping("/users/{userSeq}/estimates")
	public ResponseEntity<?> findEstimatesByUserSeq(@PathVariable("userSeq") Long userSeq) {

		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;
		try {
			List<EstimateDto> estimates = estimateService.findEstimatesByUserSeq(userSeq);
			estimates
					.forEach(e -> {
						GameResponseDto gameDto = gameServiceClient.findGameTitleBySeq(
								Math.toIntExact(e.getGameSeq()));
						e.setGameTitle(gameDto.getGameTitle());
						e.setGameTitleImageUrl(gameDto.getGameTitleImageUrl());
					});
			resultMap.put("estimates", estimates);
			resultMap.put("success", true);
			status = HttpStatus.OK;
		} catch (Exception e) {
			resultMap.put("success", false);
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<>(resultMap, status);
	}

	@GetMapping("/users/{userSeq}/reviews")
	public ResponseEntity<?> findReviewsByUserSeq(@PathVariable("userSeq") Long userSeq) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;

		try {
			List<EstimateDto> estimates = estimateService.findEstimatesWhereReviewIsNotNullByUserSeq(userSeq);
			estimates
					.forEach(e -> {
						GameResponseDto gameDto = gameServiceClient.findGameTitleBySeq(
								Math.toIntExact(e.getGameSeq()));
						e.setGameTitle(gameDto.getGameTitle());
						e.setGameTitleImageUrl(gameDto.getGameTitleImageUrl());
					});
			resultMap.put("estimates", estimates);
			resultMap.put("success", true);
			status = HttpStatus.OK;
		} catch (Exception e) {
			resultMap.put("success", false);
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<>(resultMap, status);
	}

	@GetMapping("/users/{userSeq}/articles")
	public ResponseEntity<?> findArticlesByUserSeq(@PathVariable("userSeq") Long userSeq) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;

		try {

			List<ArticleMyPageDto> articles = articleService.findArticlesByUserSeq(userSeq);
			articles
					.forEach(a -> {
						GameResponseDto gameDto = gameServiceClient.findGameTitleBySeq(
								Math.toIntExact(a.getGameSeq()));
						a.setGameTitle(gameDto.getGameTitle());
						a.setGameTitleImageUrl(gameDto.getGameTitleImageUrl());
					});

			resultMap.put("articles", articles);
			resultMap.put("success", true);
			status = HttpStatus.OK;
		} catch (Exception e) {
			resultMap.put("success", false);
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<>(resultMap, status);
	}

	@GetMapping("/users/{userSeq}/comments")
	public ResponseEntity<?> findCommentsByUserSeq(@PathVariable("userSeq") Long userSeq) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;

		try {
			List<CommentResponseDto> commentsByUserSeq = commentService.findCommentsByUserSeq(userSeq);
			resultMap.put("comments", commentsByUserSeq);
			resultMap.put("success", true);
			status = HttpStatus.OK;
		} catch (Exception e) {
			resultMap.put("success", false);
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(resultMap, status);
	}

	@PutMapping(value = "/users/{userSeq}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> updateUserProfile(@PathVariable("userSeq") Long userSeq,
											   @RequestParam("nickname") String nickname, @RequestPart("file") MultipartFile multipartFile) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;
		UserUpdateDto userUpdate = new UserUpdateDto();
		userUpdate.setUserSeq(userSeq);
		userUpdate.setNickname(nickname);
		try {
			String imageUrl = null;
			if (multipartFile != null) {
				imageUrl = awsS3Service.uploadFile(multipartFile);
			}
			userUpdate.setImageUrl(imageUrl);
			userService.updateUserProfile(userUpdate);
			resultMap.put("success", true);
			status = HttpStatus.OK;
		} catch (Exception e) {
			resultMap.put("success", false);
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(resultMap, status);
	}

	@GetMapping(value = "/users/{userSeq}")
	public ResponseEntity<?> getUserProfile(@PathVariable("userSeq") Long userSeq) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status;
		try {
			UserProfileDto profile = userService.getUserProfile(userSeq);
			resultMap.put("success", true);
			resultMap.put("userProfile", profile);
			status = HttpStatus.OK;
		} catch (Exception e) {
			resultMap.put("success", false);
			resultMap.put("error", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<>(resultMap, status);
	}
}
