import React, { useState } from 'react';
import { FilterObject, FilterType } from '../../../typedef/Game/filter.types';
import { GamePreviewType } from '../../../typedef/Game/games.types';
import GameRecommend from '../GameRecommend';

const GameRecommendContainer = () => {
	// 장르별 필터링을 위한 state
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

	const onClickLabelGenreXdBtn = (e: React.MouseEvent<SVGElement>) => {
		const genre = (e.target as Element).id;

		if (genreFilterState[genre] !== undefined) {
			setGenreFilterState({
				...genreFilterState,
				[genre]: {
					...genreFilterState[genre],
					flag: !genreFilterState[genre].flag,
				},
			});
		}
	};

	// 플랫폼별 필터링을 위한 state
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

	const onClickLabelPlatformXBtn = (e: React.MouseEvent<SVGElement>) => {
		const platform = (e.target as Element).id;

		if (platformFilterState[platform] !== undefined) {
			setPlatformFilterState({
				...platformFilterState,
				[platform]: {
					...platformFilterState[platform],
					flag: !platformFilterState[platform].flag,
				},
			});
		}
	};

	const genreFilter: FilterType = {
		filterState: genreFilterState,
		onChange: onChangeGenreFilterState,
		onClick: onClickLabelGenreXdBtn,
	};

	const platformFilter: FilterType = {
		filterState: platformFilterState,
		onChange: onChangePlatformFilter,
		onClick: onClickLabelPlatformXBtn,
	};

	const dummy: GamePreviewType[] = [
		{
			seq: 1,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
			estimatePercent: 80,
			genres: ['오픈월드', '액션'],
			platforms: ['switch'],
		},
		{
			seq: 2,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
			estimatePercent: 80,
			genres: ['오픈월드', '액션'],
			platforms: ['switch'],
		},
		{
			seq: 3,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
			estimatePercent: 80,
			genres: ['오픈월드', '액션'],
			platforms: ['switch'],
		},
		{
			seq: 4,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
			estimatePercent: 80,
			genres: ['오픈월드', '액션'],
			platforms: ['switch'],
		},
		{
			seq: 5,
			gameTitle: '젤다의 전설',
			gameTitleImageUrl: '',
			estimatePercent: 80,
			genres: ['오픈월드', '액션'],
			platforms: ['switch'],
		},
	];

	return (
		<GameRecommend
			genreFilter={genreFilter}
			platformFilter={platformFilter}
			games={dummy}
		/>
	);
};

export default GameRecommendContainer;
