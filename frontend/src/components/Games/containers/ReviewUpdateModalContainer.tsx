import React, { useEffect, useState } from 'react';
import ReviewUpdateModal from '../ReviewUpdateModal';
import { http } from '../../../utils/http';
import { GetEstimate } from './GameReviewContainer';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/UserAtom';
import { GameReviewType } from '../../../typedef/Game/games.types';
import Swal from 'sweetalert2';

const ReviewUpdateModalContainer = ({
	onChangeUpdateModalFlag,
	gameSeq,
	reviewSeq,
	fetchReviews,
	preReview,
}: {
	onChangeUpdateModalFlag: () => void;
	gameSeq: number;
	reviewSeq: number;
	fetchReviews: () => void;
	preReview: string;
}) => {
	const userInfo = useRecoilValue(userState);
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

	const [preference, setPreference] = useState({
		like: false,
		dislike: false,
	});
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
		content: preReview,
		createDate: '',
	});

	const handleRadioBtn = (id: string) => {
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

	//수정 버튼 눌렀을때
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
		//우선 estimate정보를 보냄
		http
			.post<{ estimateSeq: number }>(`web/estimates`, {
				userSeq: userInfo.userSeq,
				gameSeq: gameSeq,
				like: preference.like ? 'like' : 'dislike',
			})
			.then((estimateRes) => {
				http
					.put<GameReviewType>(`web/reviews`, {
						seq: reviewSeq,
						estimateSeq: estimateRes.estimateSeq,
						gameSeq: gameSeq,
						userSeq: userInfo.userSeq,
						text: reviewToPost.content,
					})
					.then(() => {
						fetchReviews();
						onChangeUpdateModalFlag();
					})
					.catch((e) => {
						console.log(e);
					});
			})
			.catch((e) => {
				console.log(e);
			});
	};

	useEffect(() => {
		http
			.get<GetEstimate>(`web/estimates/${gameSeq}?userSeq=${userInfo.userSeq}`)
			.then((data) => {
				setMyEstim(data);
			});
	}, []);

	useEffect(() => {
		setPreference({
			like: myEstim?.estimate?.like === 'like' ? true : false,
			dislike: myEstim?.estimate?.like === 'dislike' ? true : false,
		});
	}, [myEstim]);

	return (
		<ReviewUpdateModal
			onClickPref={onClickPref}
			preference={preference}
			onChangeUpdateModalFlag={onChangeUpdateModalFlag}
			review={reviewToPost}
			onTextChange={(reviewContent) => {
				setReviewToPost((prevState) => ({
					...prevState,
					content: reviewContent,
				}));
			}}
			onSubmit={onSubmitReview}
		/>
	);
};

export default ReviewUpdateModalContainer;
