import React from 'react';
import SearchArticle from '../SearchArticle';
import { GameArticlePreviewType } from '../../../typedef/Game/games.types';

const SearchArticleContainer = () => {
	const dummy: GameArticlePreviewType[] = [
		{
			seq: 1,
			gameSeq: 1,
			gameTitle: '게임 제목',
			userNickname: '유저 닉네임',
			userProfileImageUrl: '',
			articleTitle: '게시글 제목',
			imageUrl: '',
		},
		{
			seq: 5,
			gameSeq: 1,
			gameTitle: '게임 제목',
			userNickname: '유저 닉네임',
			userProfileImageUrl: '',
			articleTitle: '게시글 제목',
			imageUrl: '',
		},
		{
			seq: 4,
			gameSeq: 1,
			gameTitle: '게임 제목',
			userNickname: '유저 닉네임',
			userProfileImageUrl: '',
			articleTitle: '게시글 제목',
			imageUrl: '',
		},
		{
			seq: 3,
			gameSeq: 1,
			gameTitle: '게임 제목',
			userNickname: '유저 닉네임',
			userProfileImageUrl: '',
			articleTitle: '게시글 제목',
			imageUrl: '',
		},
		{
			seq: 2,
			gameSeq: 1,
			gameTitle: '게임 제목',
			userNickname: '유저 닉네임',
			userProfileImageUrl: '',
			articleTitle: '게시글 제목',
			imageUrl: '',
		},
	];

	return <SearchArticle articles={dummy} />;
};

export default SearchArticleContainer;
