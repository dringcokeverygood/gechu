import React from 'react';
import MainTrendContainer from './Containers/MainTrendContainer';
import MainRecommendContainer from './Containers/MainRecommendContainer';
// import MainNewsContainer from './Containers/MainNewsContainer';
import MainArticleContainer from './Containers/MainArticleContainer';

const MainPage = () => {
	return (
		<div className="my-20 flex flex-col gap-24">
			<MainTrendContainer />
			<MainRecommendContainer />
			{/* <MainNewsContainer /> */}
			<MainArticleContainer />
		</div>
	);
};

export default MainPage;
