import React from 'react';
import CFilterLabel from '../Common/CFilterLabel';
import { FilterType } from '../../typedef/Game/filter.types';
import { GamePreviewType } from '../../typedef/Game/games.types';
import BGameCardContainer from '../Common/containers/BGameCardContainer';

type GameCardProps = {
	platformFilter: FilterType;
	games: GamePreviewType[];
};

const SearchGame = ({ platformFilter, games }: GameCardProps) => {
	return (
		<div>
			{/* <p>게임 검색 api 호출 </p> */}

			<div className="flex w-[1200px] flex-col justify-center">
				<div className="flex w-[768px] flex-col gap-6">
					<div className="flex max-w-full flex-wrap gap-3 ">
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
				</div>

				<div className="flex flex-wrap content-start items-start justify-start gap-6 self-stretch pb-10 ">
					{games.map((game) => (
						<BGameCardContainer key={game.seq} game={game} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchGame;
