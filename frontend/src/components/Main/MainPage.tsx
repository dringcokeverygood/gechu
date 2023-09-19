import React from 'react';
import MainRecommendContainer from './containers/MainRecommendContainer';
import MainTrendContainer from './containers/MainTrendContainer';
import MainNewsContainer from './containers/MainNewsContainer';
import MainArticleContainer from './containers/MainArticleContainer';

const MainPage = () => {
	return (
		<div className="my-20 flex max-w-[1200px] flex-col gap-4 ">
			<MainTrendContainer />
			<MainRecommendContainer />
			<MainNewsContainer />
			<MainArticleContainer />
		</div>
	);
};

export default MainPage;
