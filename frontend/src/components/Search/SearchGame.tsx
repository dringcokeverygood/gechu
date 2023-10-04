import React from 'react';
import { GamePreviewType } from '../../typedef/Game/games.types';
import BGameCardContainer from '../Common/containers/BGameCardContainer';
import BLoadingCard from '../Common/BLoadingCard';

type GameCardProps = {
	games: GamePreviewType[];
	loading: boolean;
};

const SearchGame = ({ games, loading }: GameCardProps) => {
	const repeat = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<div>
			{/* <p>게임 검색 api 호출 </p> */}

			<div className="flex w-[1200px] flex-col justify-center">
				{loading ? (
					<div className="flex flex-wrap content-start items-start justify-start gap-6 self-stretch pb-10 ">
						{repeat.map((i) => {
							return <BLoadingCard key={'loading' + i} />;
						})}
					</div>
				) : games.length > 0 ? (
					<div className="flex flex-wrap content-start items-start justify-start gap-6 self-stretch pb-10 ">
						{games.map((game) => (
							<BGameCardContainer key={game.seq} game={game} />
						))}
					</div>
				) : (
					<div>게임이 없습니다.</div>
				)}
			</div>
		</div>
	);
};

export default SearchGame;
