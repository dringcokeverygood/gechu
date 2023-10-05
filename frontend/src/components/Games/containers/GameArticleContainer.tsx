import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { http } from '../../../utils/http';
import { GameArticleType } from '../../../typedef/Game/games.types';
import GameArticle from '../GameArticle';
import Swal from 'sweetalert2';

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
	const articleSeq = useParams().articleSeq;
	console.log(articleSeq, '번 글');
	const onClickBack = () => {
		navigate(-1);
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

	const onClickDeleteBtn = (seq: number) => {
		Swal.fire({
			title: '게시글 삭제',
			text: '정말 삭제하시겠습니까?',
			showCancelButton: true,
		}).then((result) => {
			if (result.isConfirmed) {
				http.delete(`web/articles/${seq}`).then(() => {
					navigate(`/game-detail/${article.gameSeq}/articles`, {
						replace: true,
					});
				});
			}
		});
	};

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
			onClickDeleteBtn={onClickDeleteBtn}
		/>
	);
};

export default GameArticleContainer;
