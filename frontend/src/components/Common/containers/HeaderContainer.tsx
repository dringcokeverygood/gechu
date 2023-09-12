import React, { useState, useCallback, useRef } from 'react';
import Header from '../Header';

const HeaderContainer = () => {
	const searchWordRef = useRef('');
	const [searchWord, setSearchWord] = useState('');

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

	const onSearch = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter') {
				if (searchWord) {
					console.log('검색');
					setSearchWord('');
				}
			}
		},
		[searchWord],
	);

	return (
		<Header
			searchWord={searchWord}
			searchWordRef={searchWordRef}
			onChangeSearchWord={onChangeSearchWord}
			onSearch={onSearch}
		/>
	);
};

export default HeaderContainer;
