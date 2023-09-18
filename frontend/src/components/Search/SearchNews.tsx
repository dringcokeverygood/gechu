import React, { useEffect } from 'react';

const SearchNews = () => {
	useEffect(() => {
		return () => console.log('뉴스 언마운트');
	}, []);

	return (
		<div>
			<p>뉴스 검색 api 호출 </p>
			<p>검색 결과</p>
		</div>
	);
};

export default SearchNews;
