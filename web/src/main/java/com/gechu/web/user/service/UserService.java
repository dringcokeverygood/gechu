package com.gechu.web.user.service;

import com.gechu.web.article.repository.ArticleRepository;
import com.gechu.web.comment.dto.CommentResponseDto;
import com.gechu.web.review.repository.ReviewRepository;
import com.gechu.web.user.dto.UserUpdateDto;
import com.gechu.web.user.entity.KakaoUserInfo;
import com.gechu.web.user.entity.Role;
import com.gechu.web.user.entity.UsersEntity;
import com.gechu.web.user.repository.UserRepository;
import com.gechu.web.user.util.JwtToken;
import com.gechu.web.user.util.JwtTokenProvider;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class UserService {

    private final BCryptPasswordEncoder encoder;
    private final UserRepository repository;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;

    @Value("${spring.security.oauth2.client.registration.kakao.client-id}")
    private String KAKAO_APP_KEY;

    @Value("${spring.security.oauth2.client.registration.kakao.redirect-uri}")
    private String KAKAO_REDIRECT_URI;

    private final WebClient webClient = WebClient.create("https://kauth.kakao.com");

    public Mono<Map<String, String>> getTokenFromKakao(String code) {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("client_id", KAKAO_APP_KEY);
        params.add("redirect_uri", KAKAO_REDIRECT_URI);
        params.add("code", code);
        params.add("grant_type", "authorization_code");

        return webClient.post()
            .uri("/oauth/token")
            .body(BodyInserters.fromFormData(params))
            .retrieve()
            .bodyToMono(Map.class)
            .map(response -> {
                Map<String, String> tokens = new HashMap<>();
                tokens.put("accessToken", response.get("access_token").toString());
                tokens.put("refreshToken", response.get("refresh_token").toString());
                return tokens;
            });
    }

    public JwtToken login(String email, String password) {
        // Authentication 객체 생성
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email,
            password);
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 검증된 인증 정보로 JWT 토큰 생성
        JwtToken token = jwtTokenProvider.generateToken(authentication);

        return token;
    }

    public Mono<KakaoUserInfo> getUserInfoFromKakao(String accessToken) {
        WebClient kakaoApiWebClient = WebClient.create("https://kapi.kakao.com");

        return kakaoApiWebClient.get()
            .uri("/v2/user/me")
            .header("Authorization", "Bearer " + accessToken)
            .retrieve()
            .bodyToMono(Map.class)
            .map(KakaoUserInfo::new)
            .flatMap(userInfo -> saveOrUpdateUser(userInfo, accessToken));
    }

    private Mono<KakaoUserInfo> saveOrUpdateUser(KakaoUserInfo kakaoUserInfo, String accessToken) {
        // 데이터베이스에 이미 존재하는 사용자인지 확인
        return Mono.justOrEmpty(repository.findByUserId(kakaoUserInfo.getUserId()))
            .switchIfEmpty(Mono.defer(() -> Mono.just(new UsersEntity())))  // 없으면 새로운 Users 객체 생성
            .flatMap(user -> {
                if (user.getSeq() == null) {  // 새로운 사용자인 경우
                    user.setProfiles(kakaoUserInfo.getNickName(), kakaoUserInfo.getUserId(), Role.USER);
                }

                // 저장은 블로킹 호출이므로 Mono에서 실행하기 위해선 fromRunnable을 사용할 수 있으나,
                // 여기서는 일단 save만 호출하고 결과는 kakaoUserInfo로 반환합니다.
                repository.save(user);
                return Mono.just(kakaoUserInfo);
            });
    }

    @Transactional
    public void updateUserProfile(UserUpdateDto userUpdate) {
        UsersEntity usersEntity = userRepository.findById(userUpdate.getUserSeq()).orElseThrow(() -> {
            throw new IllegalArgumentException("존재하지 않는 유저입니다, 유저 번호: " + userUpdate.getUserSeq());
        });

        usersEntity.updateProfile(userUpdate);
    }
}
