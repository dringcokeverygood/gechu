import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { http } from '../../../utils/http';
import { GameReviewType } from '../../../typedef/Game/games.types';
import GameReview from '../GameReview';
import GameReviewSummary from '../GameReviewSummary';

interface GetReviews {
	reviews: GameReviewType[];
	success: boolean;
	likeCnt: number;
	dislikeCnt: number;
}
//내가 평가했던or리뷰했던 게임인가?
export interface GetEstimate {
	success: boolean;
	estimate: {
		like: string;
		reviewDate: string;
		reviewSeq: number;
		reviewText: string;
		seq: number;
	};
}

const GameReviewContainer = () => {
	const [modalFlag, setModalFlag] = useState(false);
	const onChangeModalFlag = useCallback(() => {
		setModalFlag(!modalFlag);
		console.log('모달', modalFlag);
	}, [modalFlag]);

	const gameSeq = useParams().seq;
	const [reviews, setReviews] = useState<GameReviewType[]>([]);
	const [reviewFlag, setReviewFlag] = useState(false);

	useEffect(() => {
		http.get<GetEstimate>(`web/estimates/${gameSeq}?userSeq=4`).then((data) => {
			console.log(data);
			if (data.estimate) {
				if (data.estimate.reviewSeq) {
					setReviewFlag(true);
				}
			}
		});
		http.get<GetReviews>(`web/games/${gameSeq}/reviews`).then((data) => {
			console.log(gameSeq + '번 게임의 리뷰정보:');
			console.log(data);
			setReviews(data.reviews);
		});
	}, []);

	const estimateRate = {
		likeCnt: 1,
		dislikeCnt: 0,
	};
	return (
		<div>
			<GameReviewSummary
				reviewCnt={reviews.length}
				likeCnt={estimateRate.likeCnt}
				dislikeCnt={estimateRate.dislikeCnt}
				modalFlag={modalFlag}
				onChangeModalFlag={onChangeModalFlag}
				isReviewExists={reviewFlag}
			/>
			{reviews.map((review) => {
				return <GameReview key={review.reviewSeq} review={review} />;
			})}
		</div>
	);
};

export default GameReviewContainer;
