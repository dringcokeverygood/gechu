package com.gechu.web.game.controller;

import com.gechu.web.game.dto.GameDetailDto;
import com.gechu.web.game.service.GameService;
import com.gechu.web.game.service.GameServiceImpl;
import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/game-detail")
public class GameController {

    @Autowired
    GameService gameService;

    @GetMapping("/{gameSeq}")
    public ResponseEntity<?> findGameDetails(@PathVariable long gameSeq){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        //서비스호출
        GameDetailDto gameDetail = gameService.findGameDetails(gameSeq);
//        status = HttpStatus.OK;
        try{

        }catch (Exception e){
            e.printStackTrace();
//            status = HttpStatus.BAD_REQUEST;
//            resultMap.put("message", "fail");
        }
//        return new ResponseEntity<>(resultMap, status);
        return null;
    }
}
