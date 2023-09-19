import React from 'react';
import GameArticle from '../GameArticle';

const GameArticleContainer = () => {
	const newsList = [
		{
			news_seq: 1,
			game_seq: 1,
			headline: '한국닌텐도, 「별의 커비 30주년 팝업 스토어」 개최',
			content:
				'한국닌텐도㈜(http://www.nintendo.co.kr)는 2023년에도 「별의 커비 30주년 팝업 스토어」를 개최한다고 발표했다. 팝업 스토어는 신촌 U플렉스 지하 2층에서 2023년 2월 17일에 오픈되며 2023년 3월 2일까지 진행된다. 대표 상품 라인업 팝업 스토어는 「별의 커비」를 테마로 한 아기자기한 인테리어로 꾸며질 예정이며, 300종류 이상의 다양한 「별의 커비」 관련 상품들을 선보인다.',
			company: 'Nintendo',
			url: 'https://www.nintendo.co.kr/news/article/b1U0M2l1cjA5VUhxMkxuUGZuc0Zsdz09',
			image_url:
				'https://www.nintendo.co.kr/front_images/news/1186/93675a41cd73963669f436a1ddd43201.jpg',
			upload_date: '2023.2.2',
		},
		{
			news_seq: 2,
			game_seq: 1,
			headline:
				'「별의 커비 30주년」을 되돌아보는, 커비와 함께한 1년간을 소개합니다.',
			content:
				'따뜻한 봄바람이 부는 계절이 찾아왔습니다.「별의 커비」가 탄생한지 30주년을 맞이한 작년부터 올해에 걸쳐 발매된 커비 소프트웨어나, 개최되었던 이벤트, 캠페인 등을 소개합니다. 관심있으신 분들은 아래의 내용을 봐주세요. 별의 커비 디스커버리 2022년 3월 「별의 커비」 시리즈 첫 3D 액션! 커비의 친숙한 능력이 3D로 다시 태어난 것은 물론, 새로운 능력 「머금기 변형」이 등장! 자동차나 자판기를 머금어 특별한 액션을 즐길 수 있습니다.',
			company: 'Nintendo',
			url: 'https://www.nintendo.co.kr/news/article/4lH066EdVzosx6vHsAKa7d',
			image_url:
				'https://images.ctfassets.net/sjvy5j5nlcjk/6oALRzWUsBrmM6Zka6IWJR/bf175980584a73ba9234b9a9dc319ea7/_________.jpg?w=1400&fm=webp',
			upload_date: '2023.3.24',
		},
		{
			news_seq: 3,
			game_seq: 1,
			headline:
				'「TETRIS® 99」 제31회 테트1 컵 별의 커비 Wii 디럭스 컬래버레이션 축제!',
			content:
				'99명이 테트리스® 서바이벌! Nintendo Switch Online 가입자는 무료로 즐길 수 있는 「TETRIS® 99」의 제31회 이벤트가 개최됩니다! 이번에는 『별의 커비 Wii 디럭스』와 컬래버레이션을 진행하여, 이벤트 기간 중 순위에 따라 이벤트 포인트를 100 포인트 획득하시면 커스텀 테마에서 이용 가능한 스페셜 테마를 선물로 드립니다! 『별의 커비 Wii 디럭스』의 테마를 획득할 수 있는 절호의 찬스! 이번 기회에 꼭 획득해보세요! 이벤트 명 「TETRIS® 99」 제31회 테트1 컵 『별의 커비 Wii 디럭스』 컬래버레이션 축제!',
			company: 'Nintendo',
			url: 'https://www.nintendo.co.kr/news/article/1WfmU0Tz2l9hbKfEn6xcWz',
			image_url:
				'https://images.ctfassets.net/sjvy5j5nlcjk/53AFdAdChSUK0H2UnZQT5M/29ad6dd42e11df8672cc82bc0e61e0c6/a4c5cea91bf1284de0020296ee6ad1f4.jpg?w=1400&fm=webp',
			upload_date: '2023.4.18',
		},
		{
			news_seq: 4,
			game_seq: 2,
			headline:
				'『슈퍼 마리오브라더스 원더』의 예약 판매 일정 및 구입 특전 안내',
			content:
				'『슈퍼 마리오브라더스 원더』의 예약 판매 일정 및 구입 특전 안내 2023년 10월 20일(금)에 발매되는 「슈퍼 마리오브라더스 원더」의 예약 판매가 9월 1일(금)에 시작됩니다.『슈퍼 마리오브라더스 원더』 구매처별 조기 구입 특전 「슈퍼 마리오브라더스 원더」를 구입하면 받을 수 있는 특전을 아래와 같이 소개합니다.',
			company: 'Nintendo',
			url: 'https://www.nintendo.co.kr/news/article/3ONcJWHWDzXrqIsC9krmQ7',
			image_url:
				'https://images.ctfassets.net/sjvy5j5nlcjk/32gjAEo6LDQcnHvuRw67bH/35e75e7cc721e5ab9aa87b3260ee01ba/__.jpg?w=1400&fm=webp',
			upload_date: '2023.9.1',
		},
	];

	const onClickNewTab = (url: string) => {
		window.open(url, '-blank', 'noopener, noreferrer');
	};

	return <GameArticle newsList={newsList} onClickNewTab={onClickNewTab} />;
};

export default GameArticleContainer;
