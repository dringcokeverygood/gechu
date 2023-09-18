import React from 'react';
import { GameArticleType } from '../../typedef/Game/games.types';
import GameCommentListContainer from './containers/GameCommentListContainer';

const GameArticle = ({ article }: { article: GameArticleType }) => {
	return (
		<div className="flex flex-col space-y-2 rounded-lg bg-white-900 px-4 py-4 text-white-200">
			<div className="flex flex-row items-center space-x-4">
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-red-600"
					src="https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
					alt=""
				/>
				<div className="text-md font-dungGeunMo">{article.userNickname}</div>
			</div>
			<div className="font-dungGeunMo text-2xl">{article.articleTitle}</div>
			<img src={article.imageUrl} alt="article-image" className="pb-4" />
			<div>{article.content}</div>
			<div className="font-dungGeunMo">댓글 00개</div>
			<GameCommentListContainer />
		</div>
	);
};

export default GameArticle;
