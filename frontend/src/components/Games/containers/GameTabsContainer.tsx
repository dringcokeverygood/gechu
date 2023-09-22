import React from 'react';
import GameTabs from '../GameTabs';

export type GameTabItem = {
	tabTitle: string;
	tabPath: string;
};

const tabGroup: GameTabItem[] = [
	{
		tabTitle: '리뷰',
		tabPath: 'reviews',
	},
	{
		tabTitle: '게시글',
		tabPath: 'articles',
	},
	// {
	// 	tabTitle: '뉴스',
	// 	tabPath: 'news',
	// },
];

const GameTabsContainer = () => {
	return <GameTabs tabs={tabGroup} />;
};

export default GameTabsContainer;
