import React from 'react';
import { LikeGameItemType } from '../../../typedef/Game/games.types';
import { Link } from 'react-router-dom';
import { images } from '../../../constants/images';

const LikeGameItem = ({ game }: { game: LikeGameItemType }) => {
	return (
		<Link
			to={`/game-detail/${game.gameSeq}`}
			className="group relative mt-9 flex h-[160px] w-[160px] rounded-full shadow-lg"
		>
			<img
				src={
					game.gameTitleImageUrl
						? game.gameTitleImageUrl
						: images.dummy.gameImg1
				}
				className="h-full w-full rounded-full object-cover"
			/>
			<p className="absolute left-0 top-0 hidden h-full w-full items-center justify-center rounded-full bg-white-950 bg-opacity-50 font-bold group-hover:flex">
				{game.gameTitle}
			</p>
		</Link>
	);
};

export default LikeGameItem;
