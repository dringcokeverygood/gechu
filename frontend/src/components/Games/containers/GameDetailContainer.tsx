import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GameDetail from '../GameDetail';
import { GameInfoType } from '../../../typedef/Game/games.types';
import { http } from '../../../utils/http';

//추후 API호출 위해 gameSeq를 url에서 가져오기

const GameDetailContainer = () => {
	const gameSeq = useParams().seq;
	const [gameInfo, setGameInfo] = useState({
		seq: 1,
		gameTitle: '게임제목',
		gameTitleImageUrl: '',
		develop: '개발사명',
		publish: '유통사명',
		createDate: '',
		platforms: [''],
		genres: [''],
		metaScore: 98,
		openScore: 75,
	});

	useEffect(() => {
		http.get<GameInfoType>(`game/games/seq/${gameSeq}`).then((res) => {
			console.log(res);
			setGameInfo(res);
		});
	}, []);

	// const content: GameInfoType = {
	// 	seq: 1,
	// 	gameTitle: '게임제목',
	// 	develop: '개발사명',
	// 	publish: '유통사명',
	// 	metaScore: 98,
	// 	openScore: 75,
	// };

	return <GameDetail content={gameInfo} />;
};

export default GameDetailContainer;
