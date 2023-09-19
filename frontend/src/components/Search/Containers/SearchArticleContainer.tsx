import React from 'react';
import SearchArticle from '../SearchArticle';
import { GameArticlePreviewType } from '../../../typedef/Game/games.types';

const SearchArticleContainer = () => {
	const dummy: GameArticlePreviewType[] = [
		{
			seq: 1,
			gameSeq: 1,
			gameTitle: '게임 제목',
			userSeq: 1,
			userNickname: '유저 닉네임',
			articleTitle: '게시글 제목',
			content: '게시글 내용',
			imageUrl: '',
			createDate: '생성일',
		},
		{
			seq: 1,
			gameSeq: 1,
			gameTitle: '게임 제목',
			userSeq: 1,
			userNickname: '유저 닉네임',
			articleTitle: '게시글 제목',
			content: '게시글 내용',
			imageUrl: '',
			createDate: '생성일',
		},
		{
			seq: 1,
			gameSeq: 1,
			gameTitle: '게임 제목',
			userSeq: 1,
			userNickname: '유저 닉네임',
			articleTitle: '게시글 제목',
			content: '게시글 내용',
			imageUrl: '',
			createDate: '생성일',
		},
		{
			seq: 1,
			gameSeq: 1,
			gameTitle: '게임 제목',
			userSeq: 1,
			userNickname: '유저 닉네임',
			articleTitle: '게시글 제목',
			content: '게시글 내용',
			imageUrl: '',
			createDate: '생성일',
		},
		{
			seq: 1,
			gameSeq: 1,
			gameTitle: '게임 제목',
			userSeq: 1,
			userNickname: '유저 닉네임',
			articleTitle: '게시글 제목',
			content: '게시글 내용',
			imageUrl: '',
			createDate: '생성일',
		},
		{
			seq: 1,
			gameSeq: 1,
			gameTitle: '게임 제목',
			userSeq: 1,
			userNickname: '유저 닉네임',
			articleTitle: '게시글 제목',
			content: '게시글 내용',
			imageUrl: '',
			createDate: '생성일',
		},
		{
			seq: 1,
			gameSeq: 1,
			gameTitle: '게임 제목',
			userSeq: 1,
			userNickname: '유저 닉네임',
			articleTitle: '게시글 제목',
			content: '게시글 내용',
			imageUrl: '',
			createDate: '생성일',
		},
	];

	return <SearchArticle articles={dummy} />;
};

export default SearchArticleContainer;
