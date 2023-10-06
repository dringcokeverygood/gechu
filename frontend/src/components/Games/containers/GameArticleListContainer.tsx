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
	}, [modalFlag]);
	const [articles, setArticles] = useState<GameArticlePreviewType[]>([]);

	const getArticles = () => {
		http
			.get<GetArticlePreview>(`web/games/${seq}/articles`)
			.then((data) => {
				setArticles(data.articles);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	useEffect(() => {
		getArticles();
	}, []);

	return (
		<GameArticleList
			articles={articles}
			modalFlag={modalFlag}
			onChangeModalFlag={onChangeModalFlag}
			getArticles={getArticles}
		/>
	);
};

export default GameArticleListContainer;
