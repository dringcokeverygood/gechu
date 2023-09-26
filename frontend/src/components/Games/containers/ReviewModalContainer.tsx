import React, { useState } from 'react';
import ReviewModal from '../ReviewModal';

type Props = {
	onChangeModalFlag: () => void;
};

const ReviewModalContainer = ({ onChangeModalFlag }: Props) => {
	const [preference, setPreference] = useState({
		like: false,
		unlike: false,
	});
	const [selectedBefore, setSelectedBefore] = useState('');

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
				unlike: result ? false : preference.unlike,
			});
		} else if (id === 'unlike') {
			setPreference({
				...preference,
				unlike: result,
				like: result ? false : preference.like,
			});
		}
	};

	const isButtonActive = preference.like || preference.unlike;

	return (
		<div>
			<ReviewModal
				onClickPref={onClickPref}
				preference={preference}
				onChangeModalFlag={onChangeModalFlag}
				isButtonActive={isButtonActive}
			/>
		</div>
	);
};

export default ReviewModalContainer;
