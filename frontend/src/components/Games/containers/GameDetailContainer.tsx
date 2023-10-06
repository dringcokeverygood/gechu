import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GameDetail from '../GameDetail';
import { GameInfoType } from '../../../typedef/Game/games.types';
import { http } from '../../../utils/http';

const GameDetailContainer = () => {
	const gameSeq = useParams().seq;
	const [gameInfo, setGameInfo] = useState({
		seq: 1,
		gameTitle: '',
		gameTitleImageUrl: '',
		develop: '',
		publish: '',
		createDate: '',
		platforms: [''],
		genres: [''],
		metaScore: 0,
		openScore: 0,
	});

	useEffect(() => {
		http.get<GameInfoType>(`game/games/seq/${gameSeq}`).then((res) => {
			setGameInfo(res);
		});
	}, []);

	return <GameDetail content={gameInfo} />;
};

export default GameDetailContainer;
