package com.gechu.web.user.controller;

import com.gechu.web.user.entity.KakaoUserInfo;
import com.gechu.web.user.service.UserService;
import com.gechu.web.user.util.JwtToken;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.Map;

@RestController
@RequestMapping("/api/web")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<JwtToken> loginSuccess(@RequestBody Map<String, String> loginForm) {
        JwtToken token = userService.login(loginForm.get("username"), loginForm.get("password"));
        return ResponseEntity.ok(token);
    }

    @PostMapping("/auth")
    public Mono<ResponseEntity<?>> authenticateWithProvider(@RequestParam String code) {
//        String code = authData.get("code");

        if (code == null || code.isEmpty()) {
            return Mono.just(ResponseEntity.badRequest().body("인가 코드가 비어있습니다"));
        }

        if ("kakao".equalsIgnoreCase("kakao")) {
            return authenticateWithKakao(code);
        }

        return Mono.just(ResponseEntity.badRequest().body("카카오 로그인만 가능합니다."));
    }

    private Mono<ResponseEntity<?>> authenticateWithKakao(String code) {
        return userService.getAccessTokenFromKakao(code)
                .flatMap(accessToken -> {
                    if (accessToken == null) {
                        return Mono.just(ResponseEntity.badRequest().body("카카오로부터 액세스 토큰을 얻는데 실패했습니다."));
                    }

                    System.out.println(accessToken);

                    // 액세스 토큰을 이용하여 사용자 정보 가져오기
                    return userService.getUserInfoFromKakao(accessToken)
                            .flatMap(userInfo -> {
                                System.out.println(userInfo);
                                if (userInfo == null) {
                                    return Mono.just(ResponseEntity.badRequest().body("카카오로부터 사용자 정보를 불러오는데 실패했습니다."));
                                }
                                return Mono.just(ResponseEntity.ok(userInfo));
                            });
                });
    }
}
