import React from 'react';
import SideFilterBar from './components/SideFilterBar';
import GameCardContainer from '../Common/containers/GameCardContainer';
import CFilterLabel from '../Common/CFilterLabel';
import { GameListType } from '../../typedef/Game/games.types';
import LoadingGameCard from '../Common/LoadingGameCard';

const GameList = ({
	genreFilter,
	platformFilter,
	games,
	loading,
}: GameListType) => {
	const repeat = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	];
	return (
		<div className="flex w-[1200px] justify-center gap-[100px]">
			<div>
				<SideFilterBar
					genreFilter={genreFilter}
					platformFilter={platformFilter}
				/>
			</div>

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
					{loading ? (
						<>
							{repeat.map((i) => {
								return <LoadingGameCard key={'loading' + i} />;
							})}
						</>
					) : (
						games.map((game) => (
							<GameCardContainer key={game.seq} game={game} />
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default GameList;
