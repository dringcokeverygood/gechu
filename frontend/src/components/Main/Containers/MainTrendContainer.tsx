import React, { useState, useEffect } from 'react';
import { http } from '../../../utils/http';
import MainTrend from '../MainTrend';
import { GamePreviewType } from '../../../typedef/Game/games.types';
import { useNavigate } from 'react-router-dom';

type GetTrend = {
	games: GamePreviewType[];
	success: boolean;
};

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
			.get<GetTrend>(`web/elasticsearch/recentGames`)
			.then((data) => {
				setTrendGames(data.games);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<MainTrend games={trendGames} onClickGame={onClickGame} loading={loading} />
	);
};

export default MainTrendContainer;
