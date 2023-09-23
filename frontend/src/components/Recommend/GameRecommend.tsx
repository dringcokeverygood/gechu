import React from 'react';
import GameCardContainer from '../Common/containers/GameCardContainer';
import SideFilterBar from '../Game/components/SideFilterBar';
import CFilterLabel from '../Common/CFilterLabel';
import { GameListType } from '../../typedef/Game/games.types';

const GameRecommend = ({
	genreFilter,
	platformFilter,
	games,
}: GameListType) => {
	return (
		<div className="flex w-[1200px] justify-center gap-[100px]">
			<SideFilterBar
				genreFilter={genreFilter}
				platformFilter={platformFilter}
			/>

			<div className="flex w-[768px] flex-col gap-6">
				<div className="flex max-w-full flex-wrap gap-3 pt-6">
					{Object.keys(genreFilter.filterState).map(
						(genre) =>
							genreFilter.filterState[genre].flag && (
								<CFilterLabel
									id={genre}
									key={`Label${genre}`}
									text={genreFilter.filterState[genre].text}
									onClick={genreFilter.onClick}
								/>
							),
					)}
					{Object.keys(platformFilter.filterState).map(
						(platform) =>
							platformFilter.filterState[platform].flag && (
								<CFilterLabel
									id={platform}
									key={`Label${platform}`}
									text={platformFilter.filterState[platform].text}
									onClick={platformFilter.onClick}
								/>
							),
					)}
				</div>
				<div className="grid grid-cols-3 gap-6">
					{games.map((game) => (
						<GameCardContainer key={game.seq} game={game} />
					))}
				</div>
			</div>
		</div>
	);
};

export default GameRecommend;
