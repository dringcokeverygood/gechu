import React from 'react';
import GameDetail from '../GameDetail';
import { GameInfoType } from '../../../typedef/Game/games.types';

//추후 API호출 위해 gameSeq를 url에서 가져오기

const GameDetailContainer = () => {
	const content: GameInfoType = {
		seq: 1,
		gameTitle: '게임제목',
		develop: '개발사명',
		publish: '유통사명',
		metaScore: 100,
		openScore: 100,
	};

	return <GameDetail content={content} />;
};

export default GameDetailContainer;
