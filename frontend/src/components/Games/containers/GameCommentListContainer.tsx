import React from 'react';
import { GameCommentType } from '../../../typedef/Game/games.types';
import GameCommentList from '../GameCommentList';

const GameCommentListContainer = () => {
	const comments: GameCommentType[] = [
		{
			seq: 1,
			articleSeq: 1,
			userSeq: 2,
			userNickname: '싸피데이',
			content: '집에가서 게임해야지',
			createDate: '2023-09-15',
		},
		{
			seq: 2,
			articleSeq: 1,
			userSeq: 3,
			userNickname: '아샷추',
			content: '아이스티에 샷을 추가해서 드셔보세요',
			createDate: '2023-09-15',
		},
		{
			seq: 3,
			articleSeq: 1,
			userSeq: 1,
			userNickname: '재밌으면 우는 애옹이',
			content: '삐약삐약',
			createDate: '2023-09-15',
		},
	];

	return <GameCommentList comments={comments} />;
};

export default GameCommentListContainer;
