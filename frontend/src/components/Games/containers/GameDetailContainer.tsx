import React, { useState } from 'react';
import GameDetail from '../GameDetail';

//추후 API호출 위해 gameSeq를 url에서 가져오기
export type GameInfo = {
	gameTitle: string;
	develop: string;
	publish: string;
	metaScore: number;
	openScore: number;
};

const GameDetailContainer = () => {
	const [content /*setContent*/] = useState<GameInfo>({
		gameTitle: '게임제목',
		develop: '개발사명',
		publish: '유통사명',
		metaScore: 100,
		openScore: 100,
	});

	return <GameDetail content={content} />;
};

export default GameDetailContainer;
