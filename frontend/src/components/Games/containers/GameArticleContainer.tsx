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
		gameTitle: '',
		userProfile: {
			imageUrl: '',
			nickName: '',
			seq: 1,
			userId: '',
		},
		articleTitle: '',
		content: '',
		imageUrl: '',
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
