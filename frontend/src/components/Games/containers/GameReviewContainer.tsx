import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { http } from '../../../utils/http';
import { GameReviewType } from '../../../typedef/Game/games.types';
import { userState } from '../../../recoil/UserAtom';

import GameReview from '../GameReview';
import GameReviewSummary from '../GameReviewSummary';
import { useRecoilValue } from 'recoil';

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

	const userInfo = useRecoilValue(userState);

	const gameSeq = useParams().seq;
	const [reviews, setReviews] = useState<GameReviewType[]>([]);
	const [myEstim, setMyEstim] = useState<GetEstimate>({
		success: false,
		estimate: {
			seq: 0,
			like: '',
			reviewDate: '',
			reviewSeq: 0,
			reviewText: '',
		},
	});
	const [estimateRate, setEstimateRate] = useState({
		likeCnt: 1,
		dislikeCnt: 0,
	});

	const fetchReviews = () => {
		http.get<GetReviews>(`web/games/${gameSeq}/reviews`).then((data) => {
			setReviews(data.reviews);
			setEstimateRate({ likeCnt: data.likeCnt, dislikeCnt: data.dislikeCnt });
		});
	};

	useEffect(() => {
		http
			.get<GetEstimate>(`web/estimates/${gameSeq}?userSeq=${userInfo.userSeq}`)
			.then((data) => {
				console.log(data);
				setMyEstim(data);
			});
		fetchReviews();
	}, []);

	return (
		<div>
			<GameReviewSummary
				fetchReviews={fetchReviews}
				reviewCnt={reviews.length}
				likeCnt={estimateRate.likeCnt}
				dislikeCnt={estimateRate.dislikeCnt}
				modalFlag={modalFlag}
				onChangeModalFlag={onChangeModalFlag}
				myEstim={myEstim}
			/>
			{reviews.map((review) => {
				return (
					<GameReview
						key={review.reviewSeq}
						review={review}
						isMine={userInfo.userSeq === review.userProfile.seq}
					/>
				);
			})}
		</div>
	);
};

export default GameReviewContainer;
