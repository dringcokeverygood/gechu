package com.gechu.web.user.controller;

import com.gechu.web.user.service.UserService;
import com.gechu.web.user.util.JwtToken;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/login")
    public ResponseEntity<JwtToken> loginSuccess(@RequestBody Map<String, String> loginForm) {
        JwtToken token = service.login(loginForm.get("username"), loginForm.get("password"));
        return ResponseEntity.ok(token);
    }
}
