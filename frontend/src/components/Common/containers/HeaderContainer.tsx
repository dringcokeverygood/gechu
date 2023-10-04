import React, { useState, useCallback, useRef } from 'react';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import {
	useRecoilState,
	useResetRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from 'recoil';
import { LoginAtom } from '../../../recoil/LoginAtom';
import { userState } from '../../../recoil/UserAtom';
import { SearchWordAtom } from '../../../recoil/SearchWordAtom';

const HeaderContainer = () => {
	const searchWordRef = useRef('');
	const [searchWord, setSearchWord] = useState('');
	// 최종 검색어를 recoil에 저장
	const setRecoilSearchWord = useSetRecoilState(SearchWordAtom);
	const navigate = useNavigate();
	const [isLogin, setIsLogin] = useRecoilState(LoginAtom);
	const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

	const onClickLoginModalBtn = () => {
		setIsOpenLoginModal(!isOpenLoginModal);
	};
	const resetUserInfo = useResetRecoilState(userState);
	const userInfo = useRecoilValue(userState);

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
		setRecoilSearchWord(searchWord);
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
		setIsLogin(false);
		setIsOpenLoginModal(false);
		resetUserInfo();
		console.log('로그아웃');
	};

	// useEffect(() => {
	// 	console.log('userInfo :', userInfo);
	// }, [userInfo]);

	return (
		<Header
			isLogin={isLogin}
			userImageUrl={userInfo.imageUrl}
			nickname={userInfo.userName}
			searchWord={searchWord}
			searchWordRef={searchWordRef}
			onChangeSearchWord={onChangeSearchWord}
			onKeyUpForSearch={onKeyUpForSearch}
			onClickSearchBtn={onClickSearchBtn}
			onClickLogout={onClickLogout}
			isOpenLoginModal={isOpenLoginModal}
			onClickLoginModalBtn={onClickLoginModalBtn}
		/>
	);
};

export default HeaderContainer;
