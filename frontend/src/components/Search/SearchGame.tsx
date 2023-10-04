import React from 'react';
import { GamePreviewType } from '../../typedef/Game/games.types';
import BGameCardContainer from '../Common/containers/BGameCardContainer';

type GameCardProps = {
	games: GamePreviewType[];
};

const SearchGame = ({ games }: GameCardProps) => {
	return (
		<div>
			{/* <p>게임 검색 api 호출 </p> */}

			<div className="flex w-[1200px] flex-col justify-center">
				{games.length > 0 ? (
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
