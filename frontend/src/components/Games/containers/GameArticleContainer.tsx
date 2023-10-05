import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { http } from '../../../utils/http';
import { GameArticleType } from '../../../typedef/Game/games.types';
import GameArticle from '../GameArticle';
import Swal from 'sweetalert2';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/UserAtom';

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
	const onClickBack = () => {
		navigate(-1);
	};
	const [itsMine, setItsMine] = useState(false);
	const userInfo = useRecoilValue(userState);

	const [updateModalFlag, setUpdateModalFlag] = useState(false);
	const onChangeUpdateModalFlag = useCallback(() => {
		setUpdateModalFlag(!updateModalFlag);
	}, [updateModalFlag]);

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
			confirmButtonColor: '#1F771E',
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

	const getArticle = () => {
		http.get<GetArticle>(`web/articles/${articleSeq}`).then((data) => {
			setArticle(data.article);
		});
	};

	useEffect(() => {
		getArticle();
	}, []);

	useEffect(() => {
		if (article.userProfile.seq === userInfo.userSeq) setItsMine(true);
	}, [article]);

	return (
		<GameArticle
			article={article}
			imgModalFlag={imgModalFlag}
			onChangeModalFlag={onChangeImgModalFlag}
			onClickBack={onClickBack}
			onClickDeleteBtn={onClickDeleteBtn}
			updateModalFlag={updateModalFlag}
			onChangeUpdateModalFlag={onChangeUpdateModalFlag}
			getArticle={getArticle}
			itsMine={itsMine}
		/>
	);
};

export default GameArticleContainer;
