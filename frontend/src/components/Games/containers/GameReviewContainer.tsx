import React from 'react';
import { GameReviewType } from '../../../typedef/Game/games.types';
import GameReview from '../GameReview';
import GameReviewSummary from '../GameReviewSummary';

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
	const estimateRate = {
		likeCnt: 100,
		dislikeCnt: 500,
	};
	return (
		<div>
			<GameReviewSummary
				reviewCnt={reviews.length}
				likeCnt={estimateRate.likeCnt}
				dislikeCnt={estimateRate.dislikeCnt}
			/>
			{/* <div className="flex flex-row justify-between">
				<div>{reviews.length}건</div>
				<div>작성하기</div>
			</div> */}
			{reviews.map((review) => {
				return <GameReview key={review.seq} review={review} />;
			})}
		</div>
	);
};

export default GameReviewContainer;
