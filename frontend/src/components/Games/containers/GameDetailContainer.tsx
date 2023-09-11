import React, { useState } from 'react';
import GameDetail from '../GameDetail';

//추후 API호출 위해 gameSeq를 url에서 가져오기
export type GameContent = {
	gameTitle: string;
	develop: string;
	publish: string;
	metaScore: number;
};

const GameDetailContainer = () => {
	const [content /*setContent*/] = useState<GameContent>({
		gameTitle: '게임제목',
		develop: '개발사명',
		publish: '유통사명',
		metaScore: 100,
	});

	return <GameDetail content={content} />;
};

export default GameDetailContainer;
