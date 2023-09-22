package com.gechu.web.user.entity;

public interface Oauth2UserInfo {
    String getProviderId();
    String getProvider();
    String getEmail();
    String getNickName();
    Gender getGender();
    String getImageUrl();
}
