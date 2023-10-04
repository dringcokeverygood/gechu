import React from 'react';
import MainArticle from '../MainArticle';
import { useNavigate } from 'react-router-dom';
import { GameArticleType } from '../../../typedef/Game/games.types';

const MainArticleContainer = () => {
	const navigate = useNavigate();

	const onClickArticle = (url: string) => {
		navigate(url);
	};

	const dummy: GameArticleType[] = [
		{
			seq: 1,
			gameSeq: 1,
			gameTitle: '갓게임',
			userProfile: {
				imageUrl: '',
				nickName: '더미닉',
				seq: 1,
				userId: '더미id',
			},
			articleTitle: '재밌다옹',
			content: '애오옹애옹애오옹',
			imageUrl:
				'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
			createDate: '2023-09-13',
		},
	];

	return <MainArticle articleList={dummy} onClickArticle={onClickArticle} />;
};

export default MainArticleContainer;
