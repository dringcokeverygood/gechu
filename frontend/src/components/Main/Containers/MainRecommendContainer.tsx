import React from 'react';
import { GamePreviewType } from '../../../typedef/Game/games.types';
import MainRecommend from '../MainRecommend';
import { useNavigate } from 'react-router-dom';

const MainRecommendContainer = () => {
	const navigate = useNavigate();

	const onClickBtn = () => {
		navigate('/game-recommend');
	};

	const onClickGame = (url: string) => {
		navigate(url);
	};

	const dummy: GamePreviewType[] = [
		{
			seq: 1,
			gameTitle: '로스트아크',
			gameTitleImageUrl: 'https://cdn.gamemeca.com/gmdb/g000/72/97/223303.jpg',
			estimatePercent: 80,
			genres: ['MMORPG'],
			platforms: ['Switch'],
		},
		{
			seq: 2,
			gameTitle: 'P의 거짓',
			gameTitleImageUrl:
				'https://cdn.akamai.steamstatic.com/steam/apps/1627720/header.jpg?t=1695058468',
			estimatePercent: 80,
			genres: ['오픈월드', '액션'],
			platforms: ['PC', 'Steam'],
		},
		{
			seq: 3,
			gameTitle: 'Fading Afternoon',
			gameTitleImageUrl:
				'https://cdn.akamai.steamstatic.com/steam/apps/1687000/header.jpg?t=1695120089',
			estimatePercent: 80,
			genres: ['어드벤처', '액션'],
			platforms: ['액션'],
		},
		{
			seq: 4,
			gameTitle: '별의 커비 스타 얼라이어즈',
			gameTitleImageUrl:
				'https://www.nintendo.co.kr/images/renew/software/switch/ah26a/img_switch_kirbystar_main_visual.jpg',
			estimatePercent: 80,
			genres: ['액션'],
			platforms: ['Switch'],
		},
		{
			seq: 5,
			gameTitle: '슈퍼 커비 헌터즈',
			gameTitleImageUrl:
				'https://www.nintendo.co.kr/images/renew/software/switch/apy8a/img_switch_apy8a_main_visual.jpg',
			estimatePercent: 80,
			genres: ['액션'],
			platforms: ['switch'],
		},
		{
			seq: 6,
			gameTitle: '리그 오브 레전드',
			gameTitleImageUrl:
				'https://www.leagueoflegends.com/static/logo-1200-04b3cefafba917c9c571f9244fd28a1e.png',
			estimatePercent: 80,
			genres: ['AOS'],
			platforms: ['PC'],
		},
		{
			seq: 7,
			gameTitle: '별의 커비 디스커버리',
			gameTitleImageUrl:
				'https://store.nintendo.co.kr/media/catalog/product/cache/8e3c84988db1fdb90470f4d01453d879/1/7/17729239eaa5a4c5703851aa9ec2a6a8de4db56e0122d36fff708cbcaf5c7a7b.jpg',
			estimatePercent: 80,
			genres: ['액션'],
			platforms: ['Switch'],
		},
		{
			seq: 8,
			gameTitle: '커비의 드림 뷔페',
			gameTitleImageUrl:
				'https://store.nintendo.co.kr/media/catalog/product/cache/8e3c84988db1fdb90470f4d01453d879/3/6/36c889bc55718d02d7427a10196ae376b47dddce8235e827ba5745ff7806b057.jpg',
			estimatePercent: 80,
			genres: ['액션'],
			platforms: ['Switch'],
		},
		{
			seq: 9,
			gameTitle: '별의 커비 Wii 디럭스',
			gameTitleImageUrl:
				'https://store.nintendo.co.kr/media/catalog/product/cache/8e3c84988db1fdb90470f4d01453d879/4/5/4548a5ba4ace2d15bc3940b09b4b74b383c9888844dfedc16ac462ae44ae40a3.jpg',
			estimatePercent: 80,
			genres: ['액션'],
			platforms: ['Switch'],
		},
		{
			seq: 10,
			gameTitle: '발로란트',
			gameTitleImageUrl:
				'https://i.namu.wiki/i/lwi2Jg0Vjq6TanoRa6nKygWSH_60CqUdamPa3Lgc4d9tZ3UX2PWokZRkYpWypfIxWePI0nn6jIBvos2187Is_DHH9ofbvZaMMhliIjEHtPu5Vj-pH5J6h8z4U0ZeDFbxo_nUbufd2qtDQgsEU97Oww.svg',
			estimatePercent: 80,
			genres: ['액션', 'FPS'],
			platforms: ['PC'],
		},
		{
			seq: 11,
			gameTitle: '리그 오브 레전드',
			gameTitleImageUrl:
				'https://www.leagueoflegends.com/static/logo-1200-04b3cefafba917c9c571f9244fd28a1e.png',
			estimatePercent: 80,
			genres: ['AOS'],
			platforms: ['PC'],
		},
		{
			seq: 12,
			gameTitle: 'P의 거짓',
			gameTitleImageUrl:
				'https://cdn.akamai.steamstatic.com/steam/apps/1627720/header.jpg?t=1695058468',
			estimatePercent: 80,
			genres: ['오픈월드', '액션'],
			platforms: ['PC', 'Steam'],
		},
		{
			seq: 13,
			gameTitle: 'Fading Afternoon',
			gameTitleImageUrl:
				'https://cdn.akamai.steamstatic.com/steam/apps/1687000/header.jpg?t=1695120089',
			estimatePercent: 80,
			genres: ['어드벤처', '액션'],
			platforms: ['액션'],
		},
		{
			seq: 14,
			gameTitle: '별의 커비 스타 얼라이어즈',
			gameTitleImageUrl:
				'https://www.nintendo.co.kr/images/renew/software/switch/ah26a/img_switch_kirbystar_main_visual.jpg',
			estimatePercent: 80,
			genres: ['액션'],
			platforms: ['Switch'],
		},
		{
			seq: 15,
			gameTitle: '슈퍼 커비 헌터즈',
			gameTitleImageUrl:
				'https://www.nintendo.co.kr/images/renew/software/switch/apy8a/img_switch_apy8a_main_visual.jpg',
			estimatePercent: 80,
			genres: ['액션'],
			platforms: ['Switch'],
		},
		{
			seq: 16,
			gameTitle: '커비 파이터즈 2',
			gameTitleImageUrl:
				'https://store.nintendo.co.kr/media/catalog/product/cache/8e3c84988db1fdb90470f4d01453d879/e/7/e74650ccef427c3c3e6ea1c1b4629aabff825835cc261d2b96fb54a88e193c2d.jpg',
			estimatePercent: 80,
			genres: ['액션'],
			platforms: ['Switch'],
		},
		{
			seq: 17,
			gameTitle: '별의 커비 디스커버리',
			gameTitleImageUrl:
				'https://store.nintendo.co.kr/media/catalog/product/cache/8e3c84988db1fdb90470f4d01453d879/1/7/17729239eaa5a4c5703851aa9ec2a6a8de4db56e0122d36fff708cbcaf5c7a7b.jpg',
			estimatePercent: 80,
			genres: ['액션'],
			platforms: ['Switch'],
		},
		{
			seq: 18,
			gameTitle: '커비의 드림 뷔페',
			gameTitleImageUrl:
				'https://store.nintendo.co.kr/media/catalog/product/cache/8e3c84988db1fdb90470f4d01453d879/3/6/36c889bc55718d02d7427a10196ae376b47dddce8235e827ba5745ff7806b057.jpg',
			estimatePercent: 80,
			genres: ['액션'],
			platforms: ['Switch'],
		},
		{
			seq: 19,
			gameTitle: '별의 커비 Wii 디럭스',
			gameTitleImageUrl:
				'https://store.nintendo.co.kr/media/catalog/product/cache/8e3c84988db1fdb90470f4d01453d879/4/5/4548a5ba4ace2d15bc3940b09b4b74b383c9888844dfedc16ac462ae44ae40a3.jpg',
			estimatePercent: 80,
			genres: ['액션'],
			platforms: ['Switch'],
		},
		{
			seq: 20,
			gameTitle: '발로란트',
			gameTitleImageUrl:
				'https://i.namu.wiki/i/lwi2Jg0Vjq6TanoRa6nKygWSH_60CqUdamPa3Lgc4d9tZ3UX2PWokZRkYpWypfIxWePI0nn6jIBvos2187Is_DHH9ofbvZaMMhliIjEHtPu5Vj-pH5J6h8z4U0ZeDFbxo_nUbufd2qtDQgsEU97Oww.svg',
			estimatePercent: 80,
			genres: ['액션', 'FPS'],
			platforms: ['PC'],
		},
	];

	return (
		<MainRecommend
			games={dummy}
			onClickBtn={onClickBtn}
			onClickGame={onClickGame}
		/>
	);
};

export default MainRecommendContainer;
