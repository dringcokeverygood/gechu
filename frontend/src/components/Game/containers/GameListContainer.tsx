import React, { useState, useEffect } from 'react';
import GameList from '../GameList';
import { FilterObject, FilterType } from '../../../typedef/Game/filter.types';
import { GamePreviewType } from '../../../typedef/Game/games.types';
import { http } from '../../../utils/http';

const GameListContainer = () => {
	// 장르별 필터링을 위한 state
	const [genreFilterState, setGenreFilterState] = useState<FilterObject>({
		Shooter: {
			flag: false,
			text: 'FPS',
		},
		Strategy: {
			flag: false,
			text: '전략 시뮬레이션',
		},
		Puzzle: {
			flag: false,
			text: '퍼즐',
		},
		Adventure: {
			flag: false,
			text: '어드벤처',
		},
		RolePlaying: {
			flag: false,
			text: 'RPG',
		},
		Sport: {
			flag: false,
			text: '스포츠',
		},
		Indie: {
			flag: false,
			text: '인디',
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
		PlayStation5: {
			flag: false,
			text: 'PlayStation 5',
		},
		PC: {
			flag: false,
			text: 'PC',
		},
		Xbox: {
			flag: false,
			text: 'Xbox 360',
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
			let allFlag = false;

			Object.keys(genreFilterState).map((genre) => {
				allFlag = allFlag || genreFilterState[genre].flag;
				if (allFlag) return;
			});

			Object.keys(platformFilterState).map((platform) => {
				allFlag = allFlag || platformFilterState[platform].flag;
				if (allFlag) return;
			});

			if (!allFlag) setGameList(res);
			else {
				setGameList(
					res.filter((element) => {
						let flag = false;
						element.genres.map((g) => {
							Object.keys(genreFilterState).map((genre) => {
								if (
									genreFilterState[genre].flag &&
									genreFilterState[genre].text === g
								) {
									flag = true;
									return;
								}
							});
						});

						element.platforms.map((p) => {
							Object.keys(platformFilterState).map((platform) => {
								if (
									platformFilterState[platform].flag &&
									platformFilterState[platform].text === p
								) {
									flag = true;
									return;
								}
							});
						});
						return flag;
					}),
				);
			}

			setLoading(false);
		});
	}, [genreFilterState, platformFilterState]);

	return (
		<GameList
			genreFilter={genreFilter}
			platformFilter={platformFilter}
			games={gameList}
			loading={loading}
		/>
	);
};

export default GameListContainer;
