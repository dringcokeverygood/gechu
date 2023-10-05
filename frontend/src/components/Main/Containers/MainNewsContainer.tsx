import React, { useState, useEffect } from 'react';
import { http } from '../../../utils/http';
import MainNews from '../MainNews';
import { useNavigate } from 'react-router-dom';
import { GameNewsPreviewType } from '../../../typedef/main.types';

const MainNewsContainer = () => {
	const [gameNews, setGameNews] = useState<GameNewsPreviewType[]>([]);
	const navigate = useNavigate();

	const onClickBtn = () => {
		navigate('/game-news');
	};

	const onClickNewTab = (url: string) => {
		window.open(url, '-blank', 'noopener, noreferrer');
	};

	useEffect(() => {
		http
			.get<GameNewsPreviewType[]>(`game/games/news/random?count=4`)
			.then((data) => {
				setGameNews(data);
				// setLoading(false);
				console.log('news', data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<MainNews
			newsList={gameNews}
			onClickNewTab={onClickNewTab}
			onClickBtn={onClickBtn}
		/>
	);
};

export default MainNewsContainer;
