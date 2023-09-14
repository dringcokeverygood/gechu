import React from 'react';
import { GameReviewType } from '../../../typedef/Game/games.types';
import GameReview from '../GameReview';

const GameReviewContainer = () => {
	const reviews: GameReviewType[] = [
		{
			seq: 1,
			gameSeq: 1,
			gameTitle: '게임이름',
			userSeq: 1,
			userNickname: '재밌으면 우는 애옹이',
			estimate: '좋아요',
			content: '애옹~',
		},
		{
			seq: 2,
			gameSeq: 1,
			gameTitle: '게임이름',
			userSeq: 1,
			userNickname: '재밌으면 우는 애옹이',
			estimate: '싫어요',
			content: '멍멍으르렁왈왈',
		},
	];
	return (
		<div>
			{reviews.map((review) => {
				return <GameReview key={review.seq} review={review} />;
			})}
		</div>
	);
};

export default GameReviewContainer;
