import React from 'react';
import { Link } from 'react-router-dom';
import { GamePreviewType } from '../../typedef/Game/games.types';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';

const GameCard = ({ game }: { game: GamePreviewType }) => {
	return (
		<Link
			to={`/game-detail/${game.gameSeq}`}
			className="flex w-[240px] flex-col"
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
			<div className="flex w-full flex-col gap-2 overflow-hidden p-3 text-white-100">
				<div className="truncate font-dungGeunMo">{game.gameTitle}</div>
				<div className="truncate">
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

export default GameCard;
