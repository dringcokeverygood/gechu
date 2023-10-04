import React, { useState, useEffect } from 'react';
import { http } from '../../../utils/http';
import MainTrend from '../MainTrend';
import { GamePreviewType } from '../../../typedef/Game/games.types';
import { useNavigate } from 'react-router-dom';

const MainTrendContainer = () => {
	const [trendGames, setTrendGames] = useState<GamePreviewType[]>([]);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const onClickGame = (url: string) => {
		navigate(url);
	};

	useEffect(() => {
		setLoading(true);

		http
			.get<GamePreviewType[]>(`game/games`)
			.then((data) => {
				const gameList = data.slice(0, 20);
				setTrendGames(gameList);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<MainTrend games={trendGames} onClickGame={onClickGame} loading={loading} />
	);
};

export default MainTrendContainer;
