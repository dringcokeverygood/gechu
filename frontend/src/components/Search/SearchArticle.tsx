import React, { useEffect } from 'react';

const SearchArticle = () => {
	useEffect(() => {
		return () => console.log('게시물 언마운트');
	}, []);

	return (
		<div>
			<p>게시물 검색 api 호출 </p>
			<p>검색 결과</p>
		</div>
	);
};

export default SearchArticle;
