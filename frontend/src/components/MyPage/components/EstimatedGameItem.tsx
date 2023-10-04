import React from 'react';
import { EstimatedGameItemType } from '../../../typedef/Game/games.types';
import { MdThumbUpOffAlt, MdThumbDownOffAlt } from 'react-icons/md';

const EstimatedGameItem = ({
	estimatedGame,
}: {
	estimatedGame: EstimatedGameItemType;
}) => {
	return (
		<div className="flex h-[100px] w-full bg-white-100 shadow-md">
			<div className="flex h-full w-[120px] items-center justify-center bg-white-400">
				{estimatedGame.gameTitleImageUrl ? (
					<img
						src={`${estimatedGame.gameTitleImageUrl}`}
						className="h-full w-full object-cover"
					/>
				) : (
					estimatedGame.gameTitle
				)}
			</div>

			<div className="flex flex-1 flex-col justify-between p-4">
				<div className="h-full w-full overflow-auto break-all font-dungGeunMo text-[12px]">
					{estimatedGame.gameTitle}
				</div>
				<div className="flex justify-center gap-3">
					<p
						id="like"
						onClick={estimatedGame.onClickPref}
						className={
							estimatedGame.preference.like
								? `flex cursor-pointer items-center gap-1 rounded-full border-2 border-solid border-blue-500 bg-blue-500 px-2 py-1 font-dungGeunMo text-[12px] text-white-100`
								: `flex cursor-pointer items-center gap-1 rounded-full border-2 border-solid border-blue-500 px-2 py-1 font-dungGeunMo text-[12px] text-blue-500`
						}
					>
						좋아요 <MdThumbUpOffAlt size={16} id="like" />
					</p>
					<p
						id="dislike"
						onClick={estimatedGame.onClickPref}
						className={
							estimatedGame.preference.dislike
								? `flex cursor-pointer items-center gap-1 rounded-full border-2 border-solid border-red-400 bg-red-400 px-2 py-1 font-dungGeunMo text-[12px] text-white-100`
								: `flex cursor-pointer items-center gap-1 rounded-full border-2 border-solid border-red-400 px-2 py-1 font-dungGeunMo text-[12px] text-red-400`
						}
					>
						싫어요 <MdThumbDownOffAlt size={16} id="dislike" />
					</p>
				</div>
			</div>
		</div>
	);
};

export default EstimatedGameItem;
