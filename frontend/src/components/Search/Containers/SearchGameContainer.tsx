import React, { useState } from 'react';
import SearchGame from '../SearchGame';
import { FilterObject, FilterType } from '../../../typedef/Game/filter.types';
import { GamePreviewType } from '../../../typedef/Game/games.types';

const SearchGameContainer = () => {
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

	return <SearchGame platformFilter={platformFilter} games={dummy} />;
};

export default SearchGameContainer;
