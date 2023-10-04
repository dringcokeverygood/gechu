import React, { useState } from 'react';
import { http } from '../../../utils/http';
import { useParams } from 'react-router-dom';
import { GameReviewType } from '../../../typedef/Game/games.types';
import { userState } from '../../../recoil/UserAtom';
import ReviewModal from '../ReviewModal';
import { useRecoilValue } from 'recoil';
import { GetEstimate } from './GameReviewContainer';
import Swal from 'sweetalert2';

type Props = {
	fetchReviews: () => void;
	onChangeModalFlag: () => void;
	myEstim: GetEstimate;
};

const ReviewModalContainer = ({
	fetchReviews,
	onChangeModalFlag,
	myEstim,
}: Props) => {
	const [preference, setPreference] = useState({
		like: myEstim?.estimate?.like === 'like' ? true : false,
		dislike: myEstim?.estimate?.like === 'dislike' ? true : false,
	});

	const userInfo = useRecoilValue(userState);
	const gameSeq = Number(useParams().seq);
	const [selectedBefore, setSelectedBefore] = useState('');
	const [reviewToPost, setReviewToPost] = useState<GameReviewType>({
		reviewSeq: 1,
		estimateSeq: 1,
		userProfile: {
			imageUrl: '',
			nickName: '',
			seq: userInfo.userSeq,
			userId: '',
		},
		like: '',
		content: '',
		createDate: '',
	});

	const handleRadioBtn = (id: string) => {
		console.log(selectedBefore, id);
		if (selectedBefore === id) {
			setSelectedBefore('');
			return false;
		}
		setSelectedBefore(id);
		return true;
	};

	//좋아요싫어요 버튼 눌렀을때
	const onClickPref = (e: React.MouseEvent) => {
		const id = (e.target as Element).id;
		const result = handleRadioBtn(id);

		if (id === 'like') {
			setPreference({
				...preference,
				like: result,
				dislike: result ? false : preference.dislike,
			});
		} else if (id === 'dislike') {
			setPreference({
				...preference,
				dislike: result,
				like: result ? false : preference.like,
			});
		}
	};

	//등록버튼 눌렀을때
	const onSubmitReview = () => {
		if (!reviewToPost.content) {
			const Toast = Swal.mixin({
				toast: true,
				position: 'bottom-right',
				showConfirmButton: false,
				timer: 1000,
				didOpen: (toast) => {
					toast.addEventListener('mouseenter', Swal.stopTimer);
					toast.addEventListener('mouseleave', Swal.resumeTimer);
				},
			});

			Toast.fire({
				icon: 'error',
				title: '리뷰 내용을 입력하세요.',
			});
			return;
		}
		setReviewToPost((prevState) => ({
			...prevState,
			estimate: preference.like ? 'like' : 'dislike',
		}));
		console.log('post할 리뷰:');
		console.log(reviewToPost);
		//우선 estimate정보를 보냄
		http
			.post<{ estimateSeq: number }>(`web/estimates`, {
				userSeq: userInfo.userSeq,
				gameSeq: gameSeq,
				like: preference.like ? 'like' : 'dislike',
			})
			.then((estimateRes) => {
				console.log('upsert 결과:');
				console.log(estimateRes);
				http
					.post<GameReviewType>(`web/reviews`, {
						estimateSeq: estimateRes.estimateSeq,
						text: reviewToPost.content,
					})
					.then((res) => {
						console.log(res);
						fetchReviews();
						onChangeModalFlag();
					})
					.catch((e) => {
						console.log(e);
					});
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const isButtonActive = preference.like || preference.dislike;

	return (
		<div>
			<ReviewModal
				onClickPref={onClickPref}
				preference={preference}
				onChangeModalFlag={onChangeModalFlag}
				isButtonActive={isButtonActive}
				review={reviewToPost}
				onTextChange={(reviewContent) => {
					setReviewToPost((prevState) => ({
						...prevState,
						content: reviewContent,
					}));
				}}
				onSubmit={onSubmitReview}
			/>
		</div>
	);
};

export default ReviewModalContainer;
