import React from 'react';
import { Link } from 'react-router-dom';
import { GameArticleType } from '../../typedef/Game/games.types';

const BArticleCard = ({ article }: { article: GameArticleType }) => {
	return (
		<Link
			to={`/game-detail/${article.gameSeq}`}
			className="flex w-[282px] cursor-pointer flex-col hover:z-10 hover:scale-110 hover:transform"
		>
			{/* 이미지 */}
			{article.imageUrl ? (
				<img
					src={article.imageUrl}
					alt="게시물 사진"
					className="h-[282px] w-[282px] rounded-t-md object-cover"
				/>
			) : (
				<div className="flex h-[282px] w-[282px] items-center justify-center rounded-t-md bg-white-200 p-5 font-dungGeunMo text-white-400">
					<span className="h-auto w-full overflow-hidden break-all text-center font-dungGeunMo">
						{article.gameTitle}
					</span>
				</div>
			)}

			{/* 설명 */}
			<div className="flex w-full flex-col gap-2 overflow-hidden rounded-b-md bg-white-100 p-3  text-white-950">
				<div className="truncate font-dungGeunMo">{article.articleTitle}</div>
				<div className="truncate font-dungGeunMo">{article.gameTitle}</div>
				<div className="truncate font-dungGeunMo">{article.userNickname}</div>
			</div>
		</Link>
	);
};

export default BArticleCard;
