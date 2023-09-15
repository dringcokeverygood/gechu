import React from 'react';
import { GameArticlePreviewType } from '../../typedef/Game/games.types';

const GameArticlePreviewCard = ({
	article,
}: {
	article: GameArticlePreviewType;
}) => {
	return (
		<div className="mb-4 flex h-[280px] flex-col space-y-2 rounded-md bg-white-900 px-2 py-2 text-white-200 hover:bg-white-800">
			<div className="flex flex-row items-center space-x-4">
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-red-600"
					src="https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
					alt=""
				/>
				<div className="text-md font-dungGeunMo">{article.userNickname}</div>
			</div>
			<img
				src={article.imageUrl}
				alt="article-thumbnail"
				className="h-2/3 w-fit self-center"
			/>
			<div className="font-dungGeunMo text-xl">{article.articleTitle}</div>
		</div>
	);
};

export default GameArticlePreviewCard;
