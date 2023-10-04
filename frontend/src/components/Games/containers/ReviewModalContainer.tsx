import React, { useState } from 'react';
// import { http } from '../../../utils/http';
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
	// const [content, setContent] = useState('');
	const [reviewToPost] = useState<GameReviewType>({
		seq: 1,
		gameSeq: 1,
		gameTitle: '게임이름',
		userSeq: 1,
		userNickname: '닉네임',
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

	const onClickPref = (e: React.MouseEvent) => {
		const id = (e.target as Element).id;
		const result = handleRadioBtn(id);

		if (id === 'like') {
			setPreference({
				...preference,
				like: result,
				dislike: result ? false : preference.dislike,
			});
		} else if (id === 'unlike') {
			setPreference({
				...preference,
				dislike: result,
				like: result ? false : preference.like,
			});
		}
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
				onTextChange={() => {}}
				onSubmit={() => {}}
			/>
		</div>
	);
};

export default ReviewModalContainer;
