import React from 'react';
import { NavLink } from 'react-router-dom';
import { images } from '../../../constants/images';
import { MdOutlineModeEditOutline, MdModeEditOutline } from 'react-icons/md';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';

const navLinkClassName = (isActive: boolean) => {
	return `flex items-center gap-6 px-5 py-4 ${
		isActive ? 'border-r-[5px] border-solid border-blue-700' : ''
	}`;
};

const SideBar = () => {
	return (
		<div className="flex w-[250px] flex-col items-center justify-center text-white-100">
			<div className="flex w-full items-center justify-between px-5 py-4">
				<div className="relative w-[48px]">
					<img
						src={images.defaultProfile}
						className="h-[45px] w-[45px] rounded-full"
					/>
					<MdOutlineModeEditOutline
						size={16}
						className="absolute bottom-0 right-0 rounded-full border-[1px] border-solid border-white-200 bg-white-100 fill-white-950 p-[1px]"
					/>
				</div>
				<div className="w-[80px] break-all font-dungGeunMo">닉네임</div>
				<MdModeEditOutline size={16} />
			</div>
			<ul className="w-full">
				<li>
					<NavLink
						to={`/my-page`}
						className={({ isActive }) => navLinkClassName(isActive)}
					>
						<Icon icon="pixelarticons:user" width={24} height={24} />
						<div>회원 정보</div>
					</NavLink>
				</li>
				<li>
					<NavLink
						to={`/`}
						className={({ isActive }) => navLinkClassName(isActive)}
					>
						<Icon icon="pixelarticons:edit" width="24" height="24" />
						<div>게시글 관리</div>
					</NavLink>
				</li>
				<li>
					<NavLink
						to={`/`}
						className={({ isActive }) => navLinkClassName(isActive)}
					>
						<Icon
							icon="pixelarticons:message-processing"
							width="24"
							height="24"
						/>
						<div>댓글 관리</div>
					</NavLink>
				</li>
				<li>
					<NavLink
						to={`/`}
						className={({ isActive }) => navLinkClassName(isActive)}
					>
						<Icon icon="pixelarticons:heart" width="24" height="24" />
						<div>리뷰 관리</div>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
