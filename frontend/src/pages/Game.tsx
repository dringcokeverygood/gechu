import React from 'react';
// import { Outlet } from 'react-router-dom';
import GameDetailContainer from '../components/Games/containers/GameDetailContainer';
import GameTabsContainer from '../components/Games/containers/GameTabsContainer';

const Game = () => {
	return (
		<div className="">
			<GameDetailContainer />
			<GameTabsContainer />
			{/* <Outlet/> */}
		</div>
	);
};
export default Game;
