import React from 'react';
import { NavLink } from 'react-router-dom';
import { images } from '../../../constants/images';
import { MdOutlineModeEditOutline, MdModeEditOutline } from 'react-icons/md';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';

import { SideBarType } from '../../../typedef/MyPage/myPage.types';

const navLinkClassName = (isActive: boolean) => {
	return `flex items-center gap-6 px-5 py-4 ${
		isActive ? 'border-r-[5px] border-solid border-blue-700' : ''
	}`;
};

const SideBar = ({
	userImageUrl,
	nickname,
	fileInput,
	onChangeProfile,
	onClickUploadImgBtn,
	onClickUpdateNickname,
}: SideBarType) => {
	return (
		<div className="flex w-[250px] flex-col items-center justify-center text-white-100">
			<div className="flex w-full items-center justify-between px-5 py-4">
				<div className="relative w-[48px]">
					{userImageUrl ? (
						<img
							src={userImageUrl}
							className="h-[45px] w-[45px] rounded-full"
						/>
					) : (
						<img
							src={images.defaultProfile}
							className="h-[45px] w-[45px] rounded-full"
						/>
					)}
					<MdOutlineModeEditOutline
						size={16}
						onClick={onClickUploadImgBtn}
						className="absolute bottom-0 right-0 cursor-pointer rounded-full border-[1px] border-solid border-white-200 bg-white-100 fill-white-950 p-[1px]"
					/>
					<input
						type="file"
						ref={fileInput}
						onChange={onChangeProfile}
						className="hidden"
						accept="image/jpeg, image/png"
					/>
				</div>
				<div className="w-[80px] break-all font-dungGeunMo">{nickname}</div>
				<MdModeEditOutline
					size={16}
					onClick={onClickUpdateNickname}
					className="cursor-pointer"
				/>
			</div>
			<ul className="w-full">
				<li>
					<NavLink
						to={`/my-page`}
						end
						className={({ isActive }) => navLinkClassName(isActive)}
					>
						<Icon icon="pixelarticons:user" width={24} height={24} />
						<div className="font-dungGeunMo">회원 정보</div>
					</NavLink>
				</li>
				<li>
					<NavLink
						to={`/my-page/article-manage`}
						className={({ isActive }) => navLinkClassName(isActive)}
					>
						<Icon icon="pixelarticons:edit" width="24" height="24" />
						<div className="font-dungGeunMo">게시글 관리</div>
					</NavLink>
				</li>
				{/* <li>
					<NavLink
						to={`/my-page/comment-manage`}
						className={({ isActive }) => navLinkClassName(isActive)}
					>
						<Icon
							icon="pixelarticons:message-processing"
							width="24"
							height="24"
						/>
						<div className="font-dungGeunMo">댓글 관리</div>
					</NavLink>
				</li> */}
				<li>
					<NavLink
						to={`/my-page/review-manage`}
						className={({ isActive }) => navLinkClassName(isActive)}
					>
						<Icon icon="pixelarticons:heart" width="24" height="24" />
						<div className="font-dungGeunMo">리뷰 관리</div>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
