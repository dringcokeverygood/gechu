import React from 'react';
import { FilterType } from '../../../typedef/Game/checkbox.types';
import CCheckbox from '../../Common/CCheckbox';

const SideFilterBar = ({ genreFilter }: { genreFilter: FilterType }) => {
	return (
		<div className="flex flex-col">
			<div>필터</div>

			<div>장르</div>

			{Object.keys(genreFilter.filterState).map((genre) => (
				<CCheckbox
					key={genre}
					id={genre}
					text={genreFilter.filterState[genre].text}
					checked={genreFilter.filterState[genre].flag}
					onChange={genreFilter.onChange}
				/>
			))}
		</div>
	);
};

export default SideFilterBar;
