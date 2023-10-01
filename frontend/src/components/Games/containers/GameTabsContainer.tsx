import React, { useRef } from 'react';
import GameTabs from '../GameTabs';
import { useNavigate } from 'react-router-dom';

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
	const navigate = useNavigate();
	const scrollRef = useRef(null);

	const onClickTab = (url: string) => {
		navigate(url);
		if (scrollRef.current) {
			window.scrollTo({ top: 320, behavior: 'smooth' });
		}
	};

	return (
		<div className="menu" ref={scrollRef}>
			<GameTabs tabs={tabGroup} onClickTab={onClickTab} />
		</div>
	);
};

export default GameTabsContainer;
