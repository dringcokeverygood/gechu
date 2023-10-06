import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { http } from '../../../utils/http';
import { GameReviewType } from '../../../typedef/Game/games.types';
import { userState } from '../../../recoil/UserAtom';

import GameReview from '../GameReview';
import GameReviewSummary from '../GameReviewSummary';
import { useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';

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
	}, [modalFlag]);

	const userInfo = useRecoilValue(userState);

	const gameSeq = Number(useParams().seq);
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
		likeCnt: 0,
		dislikeCnt: 0,
	});

	const fetchReviews = () => {
		http
			.get<GetEstimate>(`web/estimates/${gameSeq}?userSeq=${userInfo.userSeq}`)
			.then((data) => {
				setMyEstim(data);
			});

		http.get<GetReviews>(`web/games/${gameSeq}/reviews`).then((data) => {
			setReviews(data.reviews);
			setEstimateRate({ likeCnt: data.likeCnt, dislikeCnt: data.dislikeCnt });
		});
	};

	const onClickDeleteBtn = (seq: number) => {
		Swal.fire({
			title: '리뷰 삭제',
			text: '정말 삭제하시겠습니까?',
			showCancelButton: true,
			confirmButtonColor: '#1F771E',
		}).then((result) => {
			if (result.isConfirmed) {
				http.delete(`web/reviews/${seq}`).then(() => {
					fetchReviews();
				});
			}
		});
	};

	useEffect(() => {
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
						onClickDeleteBtn={onClickDeleteBtn}
						gameSeq={gameSeq}
						fetchReviews={fetchReviews}
					/>
				);
			})}
		</div>
	);
};

export default GameReviewContainer;
