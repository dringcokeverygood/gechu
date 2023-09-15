import React from 'react';
import SideFilterBar from './components/SideFilterBar';
import { AllFilters } from '../../typedef/Game/filter.types';

const GameList = ({ genreFilter, platformFilter }: AllFilters) => {
	return (
		<div className="flex">
			<SideFilterBar
				genreFilter={genreFilter}
				platformFilter={platformFilter}
			/>
		</div>
	);
};

export default GameList;
