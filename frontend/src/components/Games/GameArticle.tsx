import React, { Fragment } from 'react';
import { GameArticleType } from '../../typedef/Game/games.types';
import GameCommentListContainer from './containers/GameCommentListContainer';
import {
	MdClose,
	MdKeyboardBackspace,
	MdModeEdit,
	MdMoreVert,
} from 'react-icons/md';
import { Menu, Transition } from '@headlessui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

type Props = {
	article: GameArticleType;
	imgModalFlag: boolean;
	onChangeModalFlag: (e: React.MouseEvent) => void;
};

const GameArticle = ({ article, imgModalFlag, onChangeModalFlag }: Props) => {
	return (
		<div className="flex flex-col gap-4 space-y-2 rounded-lg bg-white-900 px-4 py-4 text-white-200">
			{/* 헤더 */}
			<div className="flex flex-row items-center space-x-4">
				<MdKeyboardBackspace size={20} />
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-red-600"
					src="https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
					alt=""
				/>
				<div className="text-md flex-1 font-dungGeunMo">
					{article.userNickname}
				</div>
				<Menu as="div" className="relative inline-block text-left">
					<div>
						<Menu.Button className="rounded-full transition duration-100 ease-out hover:bg-white-700">
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
						<Menu.Items className="absolute right-0 mt-2 w-[130px] rounded-md  bg-white-950 shadow-md">
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
				<img
					src={article.imageUrl}
					alt="article-image"
					className="h-96 items-center object-cover pb-4"
					onClick={onChangeModalFlag}
				/>
				<div>{article.content}</div>
			</div>

			{/* 댓글 */}
			<div className="font-dungGeunMo">댓글 00개</div>
			<GameCommentListContainer />

			{/* 이미지 모달 */}
			{imgModalFlag && (
				<img src={article.imageUrl} alt="" onClick={onChangeModalFlag} />
			)}
		</div>
	);
};

export default GameArticle;
