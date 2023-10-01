import React, { useState } from 'react';
import { http } from '../../../utils/http';
import { GameReviewType } from '../../../typedef/Game/games.types';
import ReviewModal from '../ReviewModal';

type Props = {
	onChangeModalFlag: () => void;
};

const ReviewModalContainer = ({ onChangeModalFlag }: Props) => {
	const [preference, setPreference] = useState({
		like: false,
		dislike: false,
	});
	const [selectedBefore, setSelectedBefore] = useState('');
	const [reviewToPost, setReviewToPost] = useState<GameReviewType>({
		seq: 1,
		gameSeq: 1,
		gameTitle: '게임이름',
		userSeq: 4,
		userNickname: '은진이의임시유저',
		estimate: '',
		content: '',
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
		setReviewToPost((prevState) => ({
			...prevState,
			estimate: preference.like ? 'like' : 'dislike',
		}));
		console.log('post할 리뷰:');
		console.log(reviewToPost);
		http
			.post<GameReviewType>(`web/reviews`, reviewToPost)
			.then((res) => {
				console.log(res);
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
