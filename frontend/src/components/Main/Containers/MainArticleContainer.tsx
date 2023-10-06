import React, { useState, useEffect } from 'react';
// import React, { useEffect } from 'react';

import MainArticle from '../MainArticle';
import { useNavigate } from 'react-router-dom';
import { GameArticleType } from '../../../typedef/Game/games.types';
import { http } from '../../../utils/http';

type GetGameArticles = {
	articles: GameArticleType[];
	success: boolean;
	message: string;
};

const MainArticleContainer = () => {
	const [gameArticles, setGameArticles] = useState<GameArticleType[]>([]);
	const navigate = useNavigate();

	const onClickArticle = (url: string) => {
		navigate(url);
	};

	useEffect(() => {
		http
			.get<GetGameArticles>(`web/articles/recent`)
			.then((data) => {
				const { articles } = data;
				setGameArticles(articles);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<MainArticle articleList={gameArticles} onClickArticle={onClickArticle} />
	);
};

export default MainArticleContainer;
