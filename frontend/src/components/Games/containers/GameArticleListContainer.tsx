import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { http } from '../../../utils/http';
import { GameArticlePreviewType } from '../../../typedef/Game/games.types';
import GameArticleList from '../GameArticleList';

interface GetArticlePreview {
	articles: GameArticlePreviewType[];
	success: boolean;
}

const GameArticleListContainer = () => {
	const seq = Number(useParams().seq);

	const [modalFlag, setModalFlag] = useState(false);
	const onChangeModalFlag = useCallback(() => {
		setModalFlag(!modalFlag);
		console.log('모달', modalFlag);
	}, [modalFlag]);
	const [articles, setArticles] = useState<GameArticlePreviewType[]>([]);

	useEffect(() => {
		http
			.get<GetArticlePreview>(`web/games/${seq}/articles`)
			.then((data) => {
				console.log(data);
				setArticles(data.articles);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	// const articles: GameArticlePreviewType[] = [
	// 	{
	// 		seq: 1,
	// 		gameSeq: seq,
	// 		gameTitle: '갓게임',
	// 		userNickname: '재밌으면 우는 애옹이',
	// 		userProfileImageUrl: '',
	// 		articleTitle: '재밌다옹',
	// 		imageUrl:
	// 			'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
	// 	},
	// 	{
	// 		seq: 2,
	// 		gameSeq: 1,
	// 		gameTitle: '갓게임',
	// 		userNickname: '재밌으면 짖는 멍멍이',
	// 		userProfileImageUrl: '',
	// 		articleTitle: '재밌다멍',
	// 		imageUrl:
	// 			'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
	// 	},
	// 	{
	// 		seq: 3,
	// 		gameSeq: 1,
	// 		gameTitle: '갓게임',
	// 		userNickname: '재밌으면 우는 애옹이',
	// 		userProfileImageUrl: '',
	// 		articleTitle: '재밌다옹',
	// 		imageUrl:
	// 			'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
	// 	},
	// 	{
	// 		seq: 4,
	// 		gameSeq: 1,
	// 		gameTitle: '갓게임',
	// 		userNickname: '재밌으면 짖는 멍멍이',
	// 		userProfileImageUrl: '',
	// 		articleTitle: '재밌다멍',
	// 		imageUrl:
	// 			'https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
	// 	},
	// ];

	return (
		<GameArticleList
			articles={articles}
			modalFlag={modalFlag}
			onChangeModalFlag={onChangeModalFlag}
		/>
	);
};

export default GameArticleListContainer;
