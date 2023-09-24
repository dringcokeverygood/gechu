import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { http } from '../../../utils/http';
import { GameArticleType } from '../../../typedef/Game/games.types';
import GameArticle from '../GameArticle';

interface GetArticle {
	article: GameArticleType;
	success: boolean;
	message: string;
}

const GameArticleContainer = () => {
	const [imgModalFlag, setImgModalFlag] = useState(false);
	const onChangeImgModalFlag = useCallback(() => {
		setImgModalFlag(!imgModalFlag);
	}, [imgModalFlag]);

	const articleSeq = useParams().seq;
	// console.log(articleSeq);
	const [article, setArticle] = useState<GameArticleType>({
		seq: 1,
		gameSeq: 1,
		gameTitle: 'dummy',
		userSeq: 1,
		userNickname: 'dummy',
		articleTitle: 'dummy',
		content:
			'애오옹애옹애오옹애오옹애옹애오옹애오옹애옹애오옹애오옹애옹애오옹야옹야옹애오옹야옹야옹애오옹야옹야옹애오옹야옹야옹애옹야옹애옹야옹애옹야옹애옹',
		imageUrl:
			'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
		createDate: '2023-09-14',
	});
	useEffect(() => {
		http.get<GetArticle>(`web/articles/${articleSeq}`).then((data) => {
			setArticle(data.article);
		});
	}, []);

	//더미
	// const article: GameArticleType = {
	// 	seq: 1,
	// 	gameSeq: 1,
	// 	gameTitle: '갓게임',
	// 	userSeq: 1,
	// 	userNickname: '재밌으면 우는 애옹이',
	// 	articleTitle: '재밌다옹',
	// 	content:
	// 		'애오옹애옹애오옹애오옹애옹애오옹애오옹애옹애오옹애오옹애옹애오옹야옹야옹애오옹야옹야옹애오옹야옹야옹애오옹야옹야옹애옹야옹애옹야옹애옹야옹애옹',
	// 	imageUrl:
	// 		'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
	// 	createDate: '2023-09-14',
	// };

	return (
		<GameArticle
			article={article}
			imgModalFlag={imgModalFlag}
			onChangeModalFlag={onChangeImgModalFlag}
		/>
	);
};

export default GameArticleContainer;
