import React from 'react';
import SideFilterBar from './components/SideFilterBar';
import { FilterType } from '../../typedef/Game/checkbox.types';

const GameList = ({ genreFilter }: { genreFilter: FilterType }) => {
	return (
		<div className="flex">
			<SideFilterBar genreFilter={genreFilter} />
		</div>
	);
};

export default GameList;
