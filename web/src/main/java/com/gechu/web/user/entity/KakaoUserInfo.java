package com.gechu.web.user.entity;

import lombok.AllArgsConstructor;
import com.gechu.web.user.entity.Gender;

import java.util.Map;


@AllArgsConstructor
public class KakaoUserInfo implements Oauth2UserInfo {
    private Map<String, Object> attributes;

    @Override
    public String getProviderId() {
        return String.valueOf(attributes.get("id"));
    }

    @Override
    public String getProvider() {
        return "kakao";
    }

    @Override
    public String getEmail() {
        return (String) getKakaoAccount().get("email");
    }

    @Override
    public String getNickName() {
        return (String) getProfile().get("nickname");
    }

    @Override
    public Gender getGender() {
        String gender = (String) getKakaoAccount().get("gender");

        if ("male".equals(gender)) {
            return Gender.MAN;
        } else if ("female".equals(gender)) {
            return Gender.WOMAN;
        } else {
            return Gender.UNKNOWN;
        }
    }

    @Override
    public String getImageUrl() {
        return (String) getProfile().get("profile_image_url");
    }

    private Map<String, Object> getKakaoAccount() {
        return (Map<String, Object>) attributes.get("kakao_account");
    }

    private Map<String, Object> getProfile() {
        return (Map<String, Object>) getKakaoAccount().get("profile");
    }
}
