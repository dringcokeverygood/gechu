import React, { useState, useCallback, useRef } from 'react';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LoginAtom } from '../../../recoil/LoginAtom';

const HeaderContainer = () => {
	const searchWordRef = useRef('');
	const [searchWord, setSearchWord] = useState('');
	const isLogin = true;
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginAtom);

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
		console.log(searchWord);
		setSearchWord('');
		navigate('/search');
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

	const onClickLogout = () => {
		localStorage.removeItem('token');
		setIsLoggedIn(false);
		console.log(isLoggedIn);
		console.log('로그아웃');
	};

	return (
		<Header
			isLogin={isLogin}
			searchWord={searchWord}
			searchWordRef={searchWordRef}
			onChangeSearchWord={onChangeSearchWord}
			onKeyUpForSearch={onKeyUpForSearch}
			onClickSearchBtn={onClickSearchBtn}
			onClickLogout={onClickLogout}
		/>
	);
};

export default HeaderContainer;
