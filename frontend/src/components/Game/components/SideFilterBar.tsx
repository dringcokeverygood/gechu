import React from 'react';
import CCheckbox from '../../Common/CCheckbox';
import { AllFilters } from '../../../typedef/Game/filter.types';

const SideFilterBar = ({ genreFilter, platformFilter }: AllFilters) => {
	return (
		<div className="sticky top-20 flex w-[200px] flex-col items-start text-white-100">
			<div className="w-full border-b-[1px] border-solid border-white-100 py-6 font-dungGeunMo text-[24px]">
				필터
			</div>

			<div className="w-full border-b-[1px] border-solid border-white-100 pb-2">
				<div className="pb-2 pt-5 font-dungGeunMo text-[24px]">장르</div>

				{Object.keys(genreFilter.filterState).map((genre) => (
					<CCheckbox
						key={`Filter${genre}`}
						id={genre}
						text={genreFilter.filterState[genre].text}
						checked={genreFilter.filterState[genre].flag}
						onChange={genreFilter.onChange}
					/>
				))}
			</div>

			<div className="w-full border-b-[1px] border-solid border-white-100 pb-2">
				<div className="pb-2 pt-5 font-dungGeunMo text-[24px]">플랫폼</div>

				{Object.keys(platformFilter.filterState).map((platform) => (
					<CCheckbox
						key={`Filter${platform}`}
						id={platform}
						text={platformFilter.filterState[platform].text}
						checked={platformFilter.filterState[platform].flag}
						onChange={platformFilter.onChange}
					/>
				))}
			</div>
		</div>
	);
};

export default SideFilterBar;
