import React from 'react';
import MainRecommendContainer from './Containers/MainRecommendContainer';
import MainTrendContainer from './Containers/MainTrendContainer';
import MainNewsContainer from './Containers/MainNewsContainer';
import MainArticleContainer from './Containers/MainArticleContainer';

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
