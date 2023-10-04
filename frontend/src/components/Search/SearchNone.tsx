import React from 'react';
import { images } from '../../constants/images';

const SearchNone = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<img src={images.sadGechu} alt="" />
			<p className="font-dungGeunMo text-[28px]">검색 결과가 없습니다.</p>
		</div>
	);
};

export default SearchNone;
