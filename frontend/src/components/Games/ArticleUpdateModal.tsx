import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userState } from '../../recoil/UserAtom';
import { http } from '../../utils/http';
import { GameArticleType } from '../../typedef/Game/games.types';
import { useRecoilValue } from 'recoil';
import { BiX } from 'react-icons/bi';
import Swal from 'sweetalert2';

type Props = {
	onChangeUpdateModalFlag: () => void;
	getArticle: () => void;
};

interface GetArticle {
	article: GameArticleType;
	success: boolean;
	message: string;
}

const ArticleUpdateModal = ({ onChangeUpdateModalFlag, getArticle }: Props) => {
	const gameSeq = Number(useParams().seq);
	const articleSeq = Number(useParams().articleSeq);
	const userInfo = useRecoilValue(userState);
	const [article, setArticle] = useState<GameArticleType>({
		seq: 1,
		gameSeq: gameSeq,
		gameTitle: 'asdf',
		userProfile: {
			imageUrl: userInfo.imageUrl,
			nickName: userInfo.userName,
			seq: userInfo.userSeq,
			userId: userInfo.userId,
		},
		articleTitle: '',
		content: '',
		imageUrl: '',
		createDate: '',
	});

	useEffect(() => {
		http.get<GetArticle>(`web/articles/${articleSeq}`).then((data) => {
			setArticle(data.article);
		});
	}, []);

	//수정버튼 눌렀을때
	const onSubmitArticle = () => {
		if (article.articleTitle && article.content) {
			http
				.put<GameArticleType>(`web/articles/${articleSeq}`, {
					gameSeq: article.gameSeq,
					userSeq: article.userProfile.seq,
					articleTitle: article.articleTitle,
					content: article.content,
				})
				.then(() => {
					getArticle();
					onChangeUpdateModalFlag();
				})
				.catch((e) => {
					console.log(e);
				});
		} else {
			const Toast = Swal.mixin({
				toast: true,
				position: 'bottom-right',
				showConfirmButton: false,
				timer: 1000,
				didOpen: (toast) => {
					toast.addEventListener('mouseenter', Swal.stopTimer);
					toast.addEventListener('mouseleave', Swal.resumeTimer);
				},
			});

			Toast.fire({
				icon: 'error',
				title: '제목과 내용을 입력하세요.',
			});
		}
	};

	return (
		<div className="fixed left-0 top-0 z-50 flex h-full w-full  text-white-950">
			<div
				className="h-full w-full bg-white-950 bg-opacity-50"
				onClick={onChangeUpdateModalFlag}
			></div>

			{/* 모달창 */}
			<div className="fixed left-1/2 top-1/2 flex h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 overflow-auto rounded-xl bg-white-200 px-16 pb-8 pt-20">
				<BiX
					className="fixed right-8 top-8 cursor-pointer"
					size={32}
					onClick={onChangeUpdateModalFlag}
				/>
				<p className="text-start font-dungGeunMo text-4xl">게시물 등록</p>
				<div className="flex h-full w-full flex-col">
					<div className="flex h-12 items-center rounded-t-lg bg-white-100 text-xl ">
						<input
							type="text"
							className="h-full w-full bg-transparent p-3 outline-none"
							placeholder="제목을 입력하세요"
							value={article.articleTitle}
							onChange={(e) => {
								setArticle((prev) => ({
									...prev,
									articleTitle: e.target.value,
								}));
							}}
						/>
					</div>
					<textarea
						className="w-full flex-1 resize-none rounded-b-lg bg-white-100 p-3 outline-none"
						placeholder="내용을 입력하세요"
						value={article.content}
						onChange={(e) => {
							setArticle((prev) => ({
								...prev,
								content: e.target.value,
							}));
						}}
					></textarea>
				</div>

				{/* 버튼 */}
				<div className="flex gap-4 font-bold text-white-100">
					<button
						className="h-10 w-20 rounded-xl bg-red-700 hover:bg-red-600"
						onClick={onChangeUpdateModalFlag}
					>
						취소
					</button>
					<button
						className="h-10 w-20 rounded-xl bg-blue-700 hover:bg-blue-600"
						onClick={onSubmitArticle}
					>
						수정
					</button>
				</div>
			</div>
		</div>
	);
};

export default ArticleUpdateModal;
