# 서비스 소개

## 1. 서비스 설명

**개요**

- 한줄소개 : 리뷰 데이터 기반 게임 추천 플랫폼
- 서비스명 : **gechu**

**타켓**🎯

- 키워드 기반 검색으로 게임을 찾고싶은 게이머
- 간편하게 게임을 추천받고 싶은 게이머

👉 **게임을 즐기는 모든 사람들**

## 2. 서비스 구조도

### 서비스 아키텍처
![gechu-architecture](https://github.com/dringcokeverygood/gechu/assets/89453271/52f15cdb-f918-4791-8eb5-252b4e7b5e25)

### ERD
![gechu-erd](https://github.com/dringcokeverygood/gechu/assets/89453271/9b04edab-255a-411d-b7fb-cdc5622a751e)

## 3. 주요 기술

### Backend

- Spring Boot
- Spring-Boot-Jpa
- Java 11
- MariaDB
- logstash
- elastic search

### ️Frontend

- React
- Recoil
- Tailwind CSS
- TypeScript

### Infra

- AWS EC2
- docker
- nginx
- jenkins
- AWS S3
- AWS cloudfront
- Spring Cloud

### 협업

- Git
- Jira
- Mattermost
- Discord

## 4. 서비스 소개

### 1. 메인화면
메인화면에서는 최신 유행게임과 로그인 시 게임 추천을 받을 수 있음  
메인화면의 하단부는 최신 유행게임의 뉴스와, 최신 게시물이 노출됨
![메인화면](https://github.com/dringcokeverygood/gechu/assets/89453271/9b65f037-2031-44c1-8909-9ac5850db486)
![메인화면 게시글](https://github.com/dringcokeverygood/gechu/assets/89453271/ca3c028c-75ba-4873-9cdd-c6e822d2eeb5)
![메인화면 뉴스](https://github.com/dringcokeverygood/gechu/assets/89453271/d53bb63f-faa4-4e1f-95c0-627111cc1196)


### 2. 검색 화면
키워드 검색시 리뷰데이터에서 가장 많이 해당 단어가 사용된 순으로 게임을 추천해줌
![검색](https://github.com/dringcokeverygood/gechu/assets/89453271/3420c520-e318-4fb6-be7e-e5cc4ec135fa)

### 3. 게임 목록
게임 목록에서는 무작위 게임들과 사용자의 요구사항대로 필터링 한 결과를 확인 가능
![게임 목록](https://github.com/dringcokeverygood/gechu/assets/89453271/6c872f7d-fcb8-48d1-bb11-15db9d63e91f)
![게임 목록 필터링](https://github.com/dringcokeverygood/gechu/assets/89453271/106f75a4-442f-495d-8ea0-c4e2d3ed3951)

### 4. 게임 상세
게임상세에서는 게임에 대한 리뷰 및 평점을 남길 수 있고, 게임별로 게시판이 존재함
![게임상세](https://github.com/dringcokeverygood/gechu/assets/89453271/4c8cc448-3b44-4ea1-9b7b-daaf775f108c)
![게임상세 게시글](https://github.com/dringcokeverygood/gechu/assets/89453271/4ebafade-69ab-4a4a-a30c-fc9403d86648)

### 5. 마이페이지  
마이페이지에선 내 활동내역을 모아서 확인 가능
![마이페이지 선호게임](https://github.com/dringcokeverygood/gechu/assets/89453271/22fb0fb7-4006-4f91-9560-ef0c1ba0513d)
![마이페이지 게시글](https://github.com/dringcokeverygood/gechu/assets/89453271/e5925b10-66d5-424c-bbf2-521c0e73908c)
![마이페이지 리뷰](https://github.com/dringcokeverygood/gechu/assets/89453271/3e407c00-215f-41d6-95fc-fc62cbca5dec)
