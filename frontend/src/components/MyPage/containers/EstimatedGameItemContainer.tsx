import React, { useState } from 'react';
import EstimatedGameItem from '../components/EstimatedGameItem';
import {
	EstimatedGameItemType,
	LikeGameItemType,
} from '../../../typedef/Game/games.types';

const SelectGameItemContainer = ({ game }: { game: LikeGameItemType }) => {
	const [preference, setPreference] = useState({
		like: false,
		dislike: false,
	});
	const [selectedBefore, setSelectedBefore] = useState('');

	const handleRadioBtn = (id: string) => {
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
		} else if (id === 'dislike') {
			setPreference({
				...preference,
				dislike: result,
				like: result ? false : preference.like,
			});
		}
	};

	const estimatedGame: EstimatedGameItemType = {
		gameSeq: game.gameSeq,
		gameTitle: game.gameTitle,
		gameTitleImageUrl: game.gameTitleImageUrl,
		preference: preference,
		onClickPref: onClickPref,
	};

	return (
		<div>
			<EstimatedGameItem estimatedGame={estimatedGame} />
		</div>
	);
};

export default SelectGameItemContainer;
