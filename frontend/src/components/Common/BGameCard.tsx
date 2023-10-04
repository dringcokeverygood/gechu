import React from 'react';
import { Link } from 'react-router-dom';
import { GamePreviewType } from '../../typedef/Game/games.types';

const BGameCard = ({ game }: { game: GamePreviewType }) => {
	return (
		<Link
			to={`/game-detail/${game.seq}`}
			className="flex w-[282px] cursor-pointer flex-col hover:z-10 hover:scale-110 hover:transform"
		>
			{game.gameTitleImageUrl ? (
				<img
					src={game.gameTitleImageUrl}
					alt="게임 사진"
					className="h-[282px] w-[282px] rounded-t-md object-cover"
				/>
			) : (
				<div className="flex h-[282px] w-[282px] items-center justify-center rounded-t-md bg-white-200 p-5 font-dungGeunMo text-white-400">
					<span className="h-auto w-full overflow-hidden break-all text-center font-dungGeunMo">
						{game.gameTitle}
					</span>
				</div>
			)}
			<div className="flex w-full flex-col gap-2 overflow-hidden rounded-b-md bg-white-100 p-3 text-white-950">
				<div className="truncate font-bold">{game.gameTitle}</div>
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

export default BGameCard;
