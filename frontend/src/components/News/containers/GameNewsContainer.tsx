import React, { useState, useEffect } from 'react';
import { http } from '../../../utils/http';
import GameNews from '../GameNews';
import { GameNewsPreviewType } from '../../../typedef/main.types';

const GameNewsContainer = () => {
	const [gameNews, setGameNews] = useState<GameNewsPreviewType[]>([]);
	const onClickNewTab = (url: string) => {
		window.open(url, '-blank', 'noopener, noreferrer');
	};

	useEffect(() => {
		http
			.get<GameNewsPreviewType[]>(`game/games/news/random?count=17`)
			.then((data) => {
				setGameNews(data);
				// setLoading(false);
				console.log('news', data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<GameNews newsList={gameNews} onClickNewTab={onClickNewTab} />
		</div>
	);
};

export default GameNewsContainer;
