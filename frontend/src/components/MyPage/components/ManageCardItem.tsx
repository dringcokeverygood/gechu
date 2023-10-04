import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ManageCardItemType } from '../../../typedef/MyPage/myPage.types';
import { MdMoreVert } from 'react-icons/md';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import { MdThumbUpOffAlt, MdThumbDownOffAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';
import dateFormatting from '../../../utils/dateFormatting';

// article인지 review인지 구분할 값 필요(navigate용)
const ManageCardItem = ({ item }: { item: ManageCardItemType }) => {
	return (
		<div className="flex h-[250px] w-full gap-6 rounded-xl bg-white-100 p-6 text-white-950">
			<div className="h-full w-[200px]">
				<Link to={`/game-detail/${item.gameSeq}`}>
					{item.gameTitleImageUrl ? (
						<img
							src={item.gameTitleImageUrl}
							alt={item.gameTitle}
							className="h-full w-full object-cover"
						/>
					) : (
						<div className="flex h-full w-full items-center justify-center bg-white-200 text-white-400">
							{item.gameTitle}
						</div>
					)}
				</Link>
			</div>
			<div className="flex flex-1 flex-col gap-4">
				<div className="flex w-full items-center justify-between ">
					<div className="flex items-center gap-3">
						<Link
							to={`/game-detail/${item.gameSeq}`}
							className="font-dungGeunMo text-[20px]"
						>
							{item.gameTitle}
						</Link>
						{item.type === 'reviews' && item.like === 'like' ? (
							<p
								className={`flex cursor-pointer items-center gap-1 rounded-full border-2 border-solid border-blue-500 px-2 py-1 font-dungGeunMo text-[16px] text-blue-500`}
							>
								좋아요 <MdThumbUpOffAlt size={16} id="like" />
							</p>
						) : item.type === 'reviews' && item.like === 'dislike' ? (
							<p
								className={`flex cursor-pointer items-center gap-1 rounded-full border-2 border-solid border-red-400 px-2 py-1 font-dungGeunMo text-[16px] text-red-400`}
							>
								싫어요 <MdThumbDownOffAlt size={16} id="unlike" />
							</p>
						) : (
							<></>
						)}
					</div>
					<Menu
						as="div"
						className="relative inline-block bg-white-100 text-left"
					>
						<div>
							<Menu.Button className="rounded-full transition duration-100 ease-out hover:bg-white-200">
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
							<Menu.Items className="border-opacity40 absolute right-0 mt-2 w-[130px] rounded-md border-[1px] border-solid border-white-300 bg-white-100 shadow-md">
								<div className="flex flex-col">
									<Menu.Item>
										{({ active }) => (
											<Link
												className={`${
													active && 'bg-white-200'
												} flex items-center justify-center gap-4 p-2 font-dungGeunMo`}
												to="/"
											>
												<Icon
													icon="pixelarticons:edit-box"
													width="20"
													height="20"
												/>
												수정
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link
												className={`${
													active && 'bg-white-200'
												} flex items-center justify-center gap-4 p-2 font-dungGeunMo`}
												to="/"
											>
												<Icon
													icon="pixelarticons:close-box"
													width="20"
													height="20"
												/>
												삭제
											</Link>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>

				<div className="flex h-full w-full flex-col gap-3">
					<Link
						to={
							item.type === 'articles'
								? `/game-detail/${item.gameSeq}/${item.type}/${item.itemSeq}`
								: item.type === 'reviews'
								? `/game-detail/${item.gameSeq}/${item.type}`
								: `/game-detail/${item.gameSeq}`
						}
						className="flex h-full w-full flex-col gap-3"
					>
						{item.title && (
							<p className="w-[728px] truncate font-bold">{item.title}</p>
						)}
						<p className="line-clamp-5 w-[728px] overflow-hidden whitespace-pre-wrap break-all">
							{item.content}
						</p>
					</Link>
				</div>
				<div>
					<p className="text-[12px] text-white-400">
						{dateFormatting(item.createDate)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ManageCardItem;
