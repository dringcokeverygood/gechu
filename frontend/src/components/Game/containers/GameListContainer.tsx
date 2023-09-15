import React, { useState } from 'react';
import GameList from '../GameList';
import { FilterObject, FilterType } from '../../../typedef/Game/filter.types';

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

	const [platformFilterState, setPlatformFilterState] = useState<FilterObject>({
		Stream: {
			flag: false,
			text: 'Stream',
		},
		Switch: {
			flag: false,
			text: 'Switch',
		},
		PlayStation: {
			flag: false,
			text: 'PlayStation',
		},
		PC: {
			flag: false,
			text: 'PC',
		},
		Mobile: {
			flag: false,
			text: 'Mobile',
		},
	});

	const onChangePlatformFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const platform = e.target.id;

		setPlatformFilterState({
			...platformFilterState,
			[platform]: {
				...platformFilterState[platform],
				flag: !platformFilterState[platform].flag,
			},
		});
	};

	const genreFilter: FilterType = {
		filterState: genreFilterState,
		onChange: onChangeGenreFilterState,
	};

	const platformFilter: FilterType = {
		filterState: platformFilterState,
		onChange: onChangePlatformFilter,
	};

	return <GameList genreFilter={genreFilter} platformFilter={platformFilter} />;
};

export default GameListContainer;
