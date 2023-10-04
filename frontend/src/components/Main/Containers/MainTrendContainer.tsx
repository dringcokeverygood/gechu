import React, { useState, useEffect } from 'react';
import { http } from '../../../utils/http';
import MainTrend from '../MainTrend';
import { GamePreviewType } from '../../../typedef/Game/games.types';
import { useNavigate } from 'react-router-dom';

const MainTrendContainer = () => {
	const [trendGames, setTrendGames] = useState<GamePreviewType[]>([]);

	const navigate = useNavigate();

	const onClickGame = (url: string) => {
		navigate(url);
	};

	useEffect(() => {
		http
			.get<GamePreviewType[]>(`game/games`)
			.then((data) => {
				// console.log('trendList :', data);

				const first20Games = data.slice(0, 20);

				setTrendGames(first20Games);
			})
			.catch((err) => console.log(err));
	}, []);

	return <MainTrend games={trendGames} onClickGame={onClickGame} />;
};

export default MainTrendContainer;
