import React from 'react';
import { images } from '../../constants/images';

const SearchNone = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<img src={images.logo} alt="" />
			<p>내용을 찾을 수 없습니다.</p>
		</div>
	);
};

export default SearchNone;
