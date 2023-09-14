import React from 'react';
import { GameArticleType } from '../../typedef/Game/games.types';

const GameArticle = ({ article }: { article: GameArticleType }) => {
	return (
		<div className="text-white-200">
			<div>{article.articleTitle}</div>
			<div>{article.content}</div>
		</div>
	);
};

export default GameArticle;
