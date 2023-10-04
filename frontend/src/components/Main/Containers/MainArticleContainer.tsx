import React, { useState, useEffect } from 'react';
// import React, { useEffect } from 'react';

import MainArticle from '../MainArticle';
import { useNavigate } from 'react-router-dom';
import { GameArticleType } from '../../../typedef/Game/games.types';
import { http } from '../../../utils/http';

type GetGameArticles = {
	articleList: GameArticleType[];
	success: boolean;
	message: string;
};

const dummy: GameArticleType[] = [
	{
		seq: 1,
		gameSeq: 1,
		gameTitle: '갓게임',
		userSeq: 1,
		userNickname: '재밌으면 우는 애옹이',
		articleTitle: '재밌다옹',
		content: '애오옹애옹애오옹',
		imageUrl:
			'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
		createDate: '2023-09-13',
	},
	{
		seq: 2,
		gameSeq: 1,
		gameTitle: '갓게임',
		userSeq: 1,
		userNickname: '재밌으면 짖는 멍멍이',
		articleTitle: '재밌다멍',
		content: '멍멍멍왈왈컹컹',
		imageUrl:
			'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
		createDate: '2023-09-13',
	},
	{
		seq: 3,
		gameSeq: 1,
		gameTitle: '갓게임',
		userSeq: 2,
		userNickname: '재밌으면 우는 애옹이',
		articleTitle: '재밌다옹',
		content: '애오옹애옹애오옹',
		imageUrl:
			'https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
		createDate: '2023-09-13',
	},
];

const MainArticleContainer = () => {
	const [gameArticles, setGameArticles] = useState<GameArticleType[]>(dummy);
	const navigate = useNavigate();

	const onClickArticle = (url: string) => {
		navigate(url);
	};

	useEffect(() => {
		http
			.get<GetGameArticles>(`web/users/1/estimates`)
			.then((data) => {
				console.log(data);
				const { articleList } = data;
				console.log(articleList);

				if (articleList.length === 0 || articleList === undefined) {
					setGameArticles(dummy);
				} else {
					setGameArticles(articleList);
				}
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<MainArticle articleList={gameArticles} onClickArticle={onClickArticle} />
	);
};

export default MainArticleContainer;
