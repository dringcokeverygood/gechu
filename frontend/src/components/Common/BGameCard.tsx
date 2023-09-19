import React from 'react';
import { Link } from 'react-router-dom';
import { GamePreviewType } from '../../typedef/Game/games.types';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';

const BGameCard = ({ game }: { game: GamePreviewType }) => {
	return (
		<Link
			to={`/game-detail/${game.gameSeq}`}
			className="flex w-[282px] flex-col hover:z-10 hover:scale-110 hover:transform"
		>
			{game.gameTitleImageUrl ? (
				<img
					src={game.gameTitleImageUrl}
					alt="게임 사진"
					className="h-[282px] w-[282px] rounded-t-md"
				/>
			) : (
				<div className="flex h-[282px] w-[282px] items-center justify-center rounded-t-md bg-white-200 p-5 font-dungGeunMo text-white-400">
					<span className="h-auto w-full overflow-hidden break-all text-center font-dungGeunMo">
						{game.gameTitle}
					</span>
				</div>
			)}
			<div className="flex w-full flex-col gap-2 overflow-hidden rounded-b-md bg-white-100 p-3 text-white-100 text-white-950">
				<div className="truncate font-dungGeunMo">{game.gameTitle}</div>
				<div className="truncate font-dungGeunMo">
					{game.genre} {game.platform}
				</div>
				<div className="flex items-center gap-2 font-bold">
					{game.estimatePercent > 50 ? (
						<MdThumbUp size={20} className="fill-blue-500" />
					) : (
						<MdThumbDown size={20} className="fill-red-400" />
					)}
					{game.estimatePercent} %
				</div>
			</div>
		</Link>
	);
};

export default BGameCard;
