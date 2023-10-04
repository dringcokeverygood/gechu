import React, { Fragment } from 'react';
import UserProfileItem from '../Common/UserProfileItem';
import { GameArticleType } from '../../typedef/Game/games.types';
import GameCommentListContainer from './containers/GameCommentListContainer';
import {
	MdClose,
	MdKeyboardBackspace,
	MdModeEdit,
	MdMoreVert,
	// MdSend,
} from 'react-icons/md';
import { Menu, Transition } from '@headlessui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
// import { images } from '../../constants/images';

type Props = {
	article: GameArticleType;
	imgModalFlag: boolean;
	onChangeModalFlag: (e: React.MouseEvent) => void;
	onClickBack: () => void;
	commentText: string;
	handleCommentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmitComment: (e: React.FormEvent<HTMLFormElement>) => void;
};

const GameArticle = ({
	article,
	imgModalFlag,
	onChangeModalFlag,
	onClickBack,
	// commentText,
	handleSubmitComment, // handleCommentChange,
}: Props) => {
	console.log(article.userProfile);
	return (
		<div className="flex flex-col gap-4 space-y-2 rounded-lg bg-white-900 px-4 py-4 text-white-200">
			{/* 헤더 */}
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row items-center space-x-2">
					<MdKeyboardBackspace
						size={20}
						onClick={onClickBack}
						className="h-7 w-7 cursor-pointer rounded-full transition duration-100 ease-out hover:bg-white-700"
					/>
					<UserProfileItem profile={article.userProfile} />
				</div>
				<Menu as="div" className="relative inline-block text-left ">
					<div>
						<Menu.Button className="cursor-pointer rounded-full transition duration-100 ease-out hover:bg-white-700">
							<MdMoreVert size={28} />
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="absolute right-0 mt-2 w-[130px] rounded-md bg-white-950 shadow-md">
							<div className="flex flex-col">
								<Menu.Item>
									{({ active }) => (
										<Link
											className={`${
												active && 'bg-white-800'
											} flex items-center justify-center gap-4 rounded-t-md p-2 font-dungGeunMo`}
											to="/"
										>
											<MdModeEdit size={20} />
											수정
										</Link>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<Link
											className={`${
												active && 'bg-white-800'
											} flex items-center justify-center gap-4 rounded-b-md  p-2 font-dungGeunMo`}
											to="/"
										>
											<MdClose size={20} />
											삭제
										</Link>
									)}
								</Menu.Item>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>

			{/* 제목 */}
			<div className="font-dungGeunMo text-2xl">{article.articleTitle}</div>

			{/* 내용 */}
			<div className="flex flex-col">
				{article.imageUrl ? (
					<img
						src={article.imageUrl}
						alt="article-image"
						className="h-96 items-center object-cover pb-4"
						onClick={onChangeModalFlag}
					/>
				) : (
					<div></div>
				)}
				<div>{article.content}</div>
			</div>

			{/* 댓글 */}
			<div className="font-dungGeunMo">댓글 00개</div>

			{/* 댓글 입력폼 */}
			<form onSubmit={handleSubmitComment}>
				<div className="flex space-x-4">
					<textarea
						placeholder="댓글을 입력하세요."
						// value={commentText}
						// onChange={handleCommentChange}
						className="h-[80px] flex-1 resize-none rounded-md bg-white-200 p-2 text-white-950 outline-none hover:bg-white-100"
					/>
					<button
						type="submit"
						className="text-white flex w-[100px] items-center justify-center rounded-md bg-blue-500 p-2 font-dungGeunMo text-xl"
					>
						{/* <MdSend size={32} /> */}
						등록
					</button>
				</div>
			</form>

			<GameCommentListContainer />

			{/* 이미지 모달 */}
			{imgModalFlag && (
				<div
					className="fixed left-0 top-0 z-50 flex h-full w-full  text-white-950"
					onClick={onChangeModalFlag}
				>
					<div className="h-full w-full bg-white-950 bg-opacity-50 "></div>

					<img src={article.imageUrl} alt="" />
					{/* 모달창 */}
					{/* <div className="fixed left-1/2 top-1/2 flex h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-xl bg-white-100 px-16 pb-16 pt-16">
					<p className="text-start font-dungGeunMo text-4xl">게시물 등록</p>
					<div className="flex h-full w-full flex-col">
					<div className="flex h-12 items-center rounded-t-lg bg-white-50 text-xl ">
							<input
								type="text"
								className="h-full w-full bg-transparent p-3 outline-none"
								placeholder="제목을 입력하세요"
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
						</div>
						<textarea
							className="w-full flex-1  resize-none rounded-b-lg p-3 outline-none"
							placeholder="내용을 입력하세요"
						></textarea>
					</div>


				</div> */}
				</div>
			)}
		</div>
	);
};

export default GameArticle;
