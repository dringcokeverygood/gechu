import React from 'react';
import MainPageContainer from '../../components/Main/Containers/MainPageContainer';

type HomePageProps = {
	onLoginClick: () => void;
};

const HomePage = ({ onLoginClick: onClickLogin }: HomePageProps) => {
	return (
		<div className="">
			<div className="bg-white-950 text-white-100">네브바</div>
			<div className="bg-green-600 text-white-100" onClick={onClickLogin}>
				로그인
			</div>
			<div>메인페이지</div>
			<MainPageContainer />
		</div>
	);
};

export default HomePage;
