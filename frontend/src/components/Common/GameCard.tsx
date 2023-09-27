import React from 'react';
import { Link } from 'react-router-dom';
import { GamePreviewType } from '../../typedef/Game/games.types';

const GameCard = ({ game }: { game: GamePreviewType }) => {
	return (
		<Link
			to={`/game-detail/${game.seq}`}
			className="flex h-[310px] w-[240px] flex-col transition-transform duration-500 ease-in-out lg:hover:scale-105"
		>
			{game.gameTitleImageUrl ? (
				<img
					src={game.gameTitleImageUrl}
					alt="게임 사진"
					className="h-[240px] w-[240px] rounded-t-md"
				/>
			) : (
				<div className="flex h-[240px] w-[240px] items-center justify-center rounded-t-md bg-white-200 p-5 font-dungGeunMo text-white-400">
					<span className="h-auto w-full overflow-hidden break-all text-center font-dungGeunMo">
						{game.gameTitle}
					</span>
				</div>
			)}
			<div className="flex w-full flex-1 flex-col justify-between overflow-hidden rounded-b-md p-3 text-white-200">
				<div className="truncate font-dungGeunMo">{game.gameTitle}</div>
				<div className="truncate">
					{game.genres.length > 0 && '#' + game.genres[0]}{' '}
					{game.genres.length > 1 && '#' + game.genres[1]}{' '}
					{game.platforms.length > 0 && '#' + game.platforms[0]}{' '}
					{game.platforms.length > 1 && '#' + game.platforms[1]}
				</div>
			</div>
		</Link>
	);
};

export default GameCard;
