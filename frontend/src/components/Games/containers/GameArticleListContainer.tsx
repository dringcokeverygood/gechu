import React from 'react';
import { GameArticlePreviewType } from '../../../typedef/Game/games.types';
import GameArticleList from '../GameArticleList';

const GameArticleContainer = () => {
	const articles: GameArticlePreviewType[] = [
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
				'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
			createDate: '2023-09-13',
		},
		{
			seq: 4,
			gameSeq: 1,
			gameTitle: '갓게임',
			userSeq: 2,
			userNickname: '재밌으면 짖는 멍멍이',
			articleTitle: '재밌다멍',
			content: '멍멍멍왈왈컹컹',
			imageUrl:
				'https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
			createDate: '2023-09-13',
		},
	];

	return (
		// <div>
		//     {articles.map((article, idx)=>{
		//         return <GameArticlePreviewCard key={idx} article={article}/>
		//     })}
		// </div>
		<GameArticleList articles={articles} />
	);
};

export default GameArticleContainer;
