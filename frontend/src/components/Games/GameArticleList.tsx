import React from 'react';
import { Link } from 'react-router-dom';
import { GameArticlePreviewType } from '../../typedef/Game/games.types';
import GameArticlePreviewCard from './GameArticlePreviewCard';

const GameArticleList = ({
	articles,
}: {
	articles: GameArticlePreviewType[];
}) => {
	return (
		<div className="grid grid-cols-4 gap-4">
			{articles.map((article) => {
				return (
					<Link to={`/game-detail/articles/${article.seq}`}>
						<GameArticlePreviewCard key={article.seq} article={article} />
					</Link>
				);
			})}
		</div>
	);
};

export default GameArticleList;
