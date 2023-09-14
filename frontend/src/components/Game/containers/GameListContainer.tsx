import React, { useState } from 'react';
import GameList from '../GameList';
import { FilterObject, FilterType } from '../../../typedef/Game/checkbox.types';

const GameListContainer = () => {
	const [genreFilterState, setGenreFilterState] = useState<FilterObject>({
		Action: {
			flag: false,
			text: '액션',
		},
		Strategy: {
			flag: false,
			text: '전략',
		},
		Puzzle: {
			flag: false,
			text: '퍼즐',
		},
		Adventure: {
			flag: false,
			text: '어드벤쳐',
		},
		Survival: {
			flag: false,
			text: '생존',
		},
	});

	const onChangeGenreFilterState = (e: React.ChangeEvent<HTMLInputElement>) => {
		const genre = e.target.id;

		setGenreFilterState({
			...genreFilterState,
			[genre]: {
				...genreFilterState[genre],
				flag: !genreFilterState[genre].flag,
			},
		});
	};

	const genreFilter: FilterType = {
		filterState: genreFilterState,
		onChange: onChangeGenreFilterState,
	};

	return <GameList genreFilter={genreFilter} />;
};

export default GameListContainer;
