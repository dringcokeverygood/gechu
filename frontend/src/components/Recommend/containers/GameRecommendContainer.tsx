import React, { useState, useEffect } from 'react';
import { FilterObject, FilterType } from '../../../typedef/Game/filter.types';
import { GamePreviewType } from '../../../typedef/Game/games.types';
import { http } from '../../../utils/http';
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

	const [gameList, setGameList] = useState<GamePreviewType[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		http.get<GamePreviewType[]>(`game/games`).then((res) => {
			setGameList(res);
			setLoading(false);
		});
	}, []);

	return (
		<GameRecommend
			genreFilter={genreFilter}
			platformFilter={platformFilter}
			games={gameList}
			loading={loading}
		/>
	);
};

export default GameRecommendContainer;
