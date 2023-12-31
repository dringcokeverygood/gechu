import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MdMoreVert } from 'react-icons/md';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { ManageCommentCardItemType } from '../../../typedef/MyPage/myPage.types';

const ManageCommentCardItem = ({
	item,
}: {
	item: ManageCommentCardItemType;
}) => {
	return (
		<div className="flex h-[200px] w-full gap-6 rounded-xl bg-white-100 p-6 text-white-950">
			<div className="h-full w-[150px]">
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
			<div className="flex w-1/2 flex-1 flex-col gap-4">
				<div className="flex h-full w-full items-start justify-end">
					<Link
						to={`/game-detail/${item.gameSeq}/articles/${item.articleSeq}`}
						className="flex h-full w-full flex-col gap-3"
					>
						<p className="line-clamp-6 overflow-hidden whitespace-pre-wrap break-all">
							{item.content}
						</p>
					</Link>
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
				<div>
					<p className="text-[12px] text-white-400">{item.createDate}</p>
				</div>
			</div>
		</div>
	);
};

export default ManageCommentCardItem;
