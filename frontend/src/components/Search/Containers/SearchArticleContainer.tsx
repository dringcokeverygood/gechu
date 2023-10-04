import React from 'react';
import SearchArticle from '../SearchArticle';
import { GameArticlePreviewType } from '../../../typedef/Game/games.types';

const SearchArticleContainer = () => {
	const dummy: GameArticlePreviewType[] = [];

	return <SearchArticle articles={dummy} />;
};

export default SearchArticleContainer;
