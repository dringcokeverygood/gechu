import React, { useState, useCallback, useRef } from 'react';
import Header from '../Header';

const HeaderContainer = () => {
	const searchWordRef = useRef('');
	const [searchWord, setSearchWord] = useState('');
	const isLogin = true;

	const onChangeSearchWord = useCallback(
		(
			e: React.ChangeEvent<HTMLInputElement>,
			type: React.MutableRefObject<string>,
		) => {
			const value = e.target.value;
			type.current = value;
			setSearchWord(type.current);
		},
		[],
	);

	const handleSearch = () => {
		console.log('검색');
		setSearchWord('');
	};

	const onKeyUpForSearch = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter') {
				if (searchWord) {
					handleSearch();
				}
			}
		},
		[searchWord],
	);

	const onClickSearchBtn = useCallback(() => {
		if (searchWord) {
			handleSearch();
		}
	}, [searchWord]);

	return (
		<Header
			isLogin={isLogin}
			searchWord={searchWord}
			searchWordRef={searchWordRef}
			onChangeSearchWord={onChangeSearchWord}
			onKeyUpForSearch={onKeyUpForSearch}
			onClickSearchBtn={onClickSearchBtn}
		/>
	);
};

export default HeaderContainer;
