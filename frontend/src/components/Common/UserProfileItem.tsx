import React from 'react';
import { UserProfileType } from '../../typedef/main.types';
import { images } from '../../constants/images';

interface UserProfileItemProps {
	profile: UserProfileType;
	size?: string; // '?'를 사용하여 size가 선택적임을 나타냅니다.
}

const UserProfileItem = ({ profile, size }: UserProfileItemProps) => {
	const isSmall = () => {
		return size === 'small';
	};
	const imageSizeClass = isSmall() ? 'h-6 w-6' : 'h-10 w-10';

	return (
		<div className="flex flex-row items-center space-x-4">
			{profile.imageUrl ? (
				<img
					className={`inline-block rounded-full ring-2 ring-green-400 ${imageSizeClass}`}
					src={profile.imageUrl}
					alt="profile-image"
				/>
			) : (
				<img
					className={`inline-block rounded-full ring-2 ring-green-400 ${imageSizeClass}`}
					src={images.defaultProfile}
				/>
			)}
			<div className="flex-1 truncate font-dungGeunMo text-lg">
				{profile.nickName}
			</div>
		</div>
	);
};

export default UserProfileItem;
