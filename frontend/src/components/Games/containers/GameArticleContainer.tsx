import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { http } from '../../../utils/http';
import { GameArticleType } from '../../../typedef/Game/games.types';
import GameArticle from '../GameArticle';

interface GetArticle {
	article: GameArticleType;
	success: boolean;
	message: string;
}

const GameArticleContainer = () => {
	const navigate = useNavigate();

	const [imgModalFlag, setImgModalFlag] = useState(false);
	const onChangeImgModalFlag = useCallback(() => {
		setImgModalFlag(!imgModalFlag);
	}, [imgModalFlag]);
	const articleSeq = useParams().seq;
	const onClickBack = () => {
		navigate(-1);
	};
	const [commentText, setCommentText] = useState('');

	const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCommentText(e.target.value);
	};

	const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Here, you can handle the submission of the comment text, e.g., send it to a server or update the state.
		// You can add your logic here.
		// Reset the comment text field after submission.
		setCommentText('');
	};

	const [article, setArticle] = useState<GameArticleType>({
		seq: 1,
		gameSeq: 1,
		gameTitle: 'dummy',
		userProfile: {
			imageUrl:
				'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
			nickName: '더미닉',
			seq: 1,
			userId: '더미id',
		},
		articleTitle: 'dummy',
		content:
			'애오옹애옹애오옹애오옹애옹애오옹애오옹애옹애오옹애오옹애옹애오옹야옹야옹애오옹야옹야옹애오옹야옹야옹애오옹야옹야옹애옹야옹애옹야옹애옹야옹애옹',
		imageUrl:
			'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
		createDate: '2023-09-14',
	});
	useEffect(() => {
		http.get<GetArticle>(`web/articles/${articleSeq}`).then((data) => {
			setArticle(data.article);
		});
	}, []);

	return (
		<GameArticle
			article={article}
			imgModalFlag={imgModalFlag}
			onChangeModalFlag={onChangeImgModalFlag}
			onClickBack={onClickBack}
			commentText={commentText}
			handleCommentChange={handleCommentChange}
			handleSubmitComment={handleSubmitComment}
		/>
	);
};

export default GameArticleContainer;
