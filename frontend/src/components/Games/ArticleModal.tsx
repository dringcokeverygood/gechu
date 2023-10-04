import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { http } from '../../utils/http';
import { GameArticleType } from '../../typedef/Game/games.types';

type Props = {
	onChangeModalFlag: () => void;
};

const ArticleModal = ({ onChangeModalFlag }: Props) => {
	const gameSeq = Number(useParams().seq);
	const [article, setArticle] = useState<GameArticleType>({
		seq: 1,
		gameSeq: gameSeq,
		gameTitle: 'asdf',
		userSeq: 4,
		userNickname: 'nicknick',
		articleTitle: '제목입니다',
		content: '내용입니다',
		imageUrl: '',
		createDate: '',
	});
	console.log(article);

	//등록버튼 눌렀을때
	const onSubmitArticle = () => {
		console.log('post할 게시글:');
		console.log(article);
		const formData = new FormData();
		// formData.append(
		// 	'dto',
		// 	new Blob(
		// 		[
		// 			JSON.stringify({
		// 				gameSeq: article.gameSeq,
		// 				userSeq: article.userSeq,
		// 				articleTitle: article.articleTitle,
		// 				content: article.content,
		// 			}),
		// 		],
		// 		{
		// 			type: 'application/json',
		// 		},
		// 	),
		// );
		formData.append(
			'dto',
			JSON.stringify({
				gameSeq: article.gameSeq,
				userSeq: article.userSeq,
				articleTitle: article.articleTitle,
				content: article.content,
			}),
		);
		// formData.append('file', new Blob());
		// const headers = {
		// 	'Content-Type': 'multipart/form-data',
		// };
		http
			.post<GameArticleType>(`web/articles`, formData)
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<div className="fixed left-0 top-0 z-50 flex h-full w-full  text-white-950">
			<div className="h-full w-full bg-white-950 bg-opacity-50 "></div>

			{/* 모달창 */}
			<div className="fixed left-1/2 top-1/2 flex h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-xl bg-white-100 px-16 pb-16 pt-16">
				<p className="text-start font-dungGeunMo text-4xl">게시물 등록</p>
				<div className="flex h-full w-full flex-col">
					<div className="flex h-12 items-center rounded-t-lg bg-white-50 text-xl ">
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
						<button type="button" className="mx-3 h-6 cursor-pointer rounded">
							<svg
								className="h-4 w-4 "
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 16 20"
							>
								<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
								<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
							</svg>
						</button>
						{/* <input
							type="file"
							ref={fileInput}
							onChange={onChangeProfile}
							className="hidden"
						/> */}
					</div>
					<textarea
						className="w-full flex-1  resize-none rounded-b-lg p-3 outline-none"
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
				<div className="font-bold text-white-100">
					<button
						className="mx-2 h-10 w-16 rounded-xl bg-red-400 hover:bg-red-700"
						onClick={onChangeModalFlag}
					>
						취소
					</button>
					<button
						className="mx-2 h-10 w-16 rounded-xl bg-blue-400 hover:bg-blue-700"
						onClick={onSubmitArticle}
					>
						등록
					</button>
				</div>
			</div>
		</div>
	);
};

export default ArticleModal;
