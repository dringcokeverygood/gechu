import React, { useEffect } from 'react';

const SearchGame = () => {
	useEffect(() => {
		return () => console.log('게임 언마운트');
	}, []);

	return (
		<div>
			<p>게임 검색 api 호출 </p>
			<p>검색 결과</p>
		</div>
	);
};

export default SearchGame;
