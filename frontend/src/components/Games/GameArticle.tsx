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
import ArticleUpdateModal from './ArticleUpdateModal';
// import { images } from '../../constants/images';

type Props = {
	article: GameArticleType;
	imgModalFlag: boolean;
	onChangeModalFlag: (e: React.MouseEvent) => void;
	onClickBack: () => void;
	onClickDeleteBtn: (seq: number) => void;
	updateModalFlag: boolean;
	onChangeUpdateModalFlag: () => void;
	getArticle: () => void;
	itsMine: boolean;
};

const GameArticle = ({
	article,
	imgModalFlag,
	onChangeModalFlag,
	onClickBack,
	onClickDeleteBtn,
	updateModalFlag,
	onChangeUpdateModalFlag,
	getArticle,
	itsMine,
}: Props) => {
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
					<UserProfileItem
						profile={article.userProfile}
						date={article.createDate}
					/>
				</div>
				{itsMine && (
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
											<div
												className={`${
													active && 'bg-white-800'
												} flex cursor-pointer items-center justify-center gap-4 rounded-t-md p-2 font-dungGeunMo`}
												onClick={() => {
													onChangeUpdateModalFlag();
												}}
											>
												<MdModeEdit size={20} />
												수정
											</div>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<div
												className={`${
													active && 'bg-white-800'
												} flex cursor-pointer items-center justify-center gap-4  rounded-b-md p-2 font-dungGeunMo`}
												onClick={() => {
													onClickDeleteBtn(article.seq);
												}}
											>
												<MdClose size={20} />
												삭제
											</div>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				)}
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

			<GameCommentListContainer />

			{/* 이미지 모달 */}
			{imgModalFlag && (
				<div
					className="fixed left-0 top-0 z-50 flex h-full w-full  text-white-950"
					onClick={onChangeModalFlag}
				>
					<div className="h-full w-full bg-white-950 bg-opacity-50 "></div>

					<img src={article.imageUrl} alt="" />
				</div>
			)}

			{updateModalFlag && (
				<ArticleUpdateModal
					onChangeUpdateModalFlag={onChangeUpdateModalFlag}
					getArticle={getArticle}
					articleSeq={article.seq}
					gameSeq={article.gameSeq}
				/>
			)}
		</div>
	);
};

export default GameArticle;
