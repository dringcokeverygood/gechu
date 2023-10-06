import React from 'react';
import SearchArticle from '../SearchArticle';
import { GameArticlePreviewType } from '../../../typedef/Game/games.types';

const SearchArticleContainer = ({
	articles,
	loading,
}: {
	articles: GameArticlePreviewType[];
	loading: boolean;
}) => {
	return <SearchArticle loading={loading} articles={articles} />;
};

export default SearchArticleContainer;
