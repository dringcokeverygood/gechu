import React from 'react';
import { GameArticlePreviewType } from '../../../typedef/Game/games.types';
import BArticleCard from '../BArticleCard';

const BArticleCardContainer = ({
	article,
}: {
	article: GameArticlePreviewType;
}) => {
	return <BArticleCard article={article} />;
};

export default BArticleCardContainer;
