import React from 'react';
import { dateTimeFormatting } from '../../utils/dateFormatting';
import { UserProfileType } from '../../typedef/main.types';
import { images } from '../../constants/images';

interface UserProfileItemProps {
	profile: UserProfileType;
	size?: string;
	date?: string;
}

const UserProfileItem = ({ profile, size, date }: UserProfileItemProps) => {
	const isSmall = () => {
		return size === 'small';
	};
	const imageSizeClass = isSmall() ? 'h-8 w-8' : 'h-10 w-10';
	const nickClass = isSmall() ? 'text-sm' : 'text-lg';

	return (
		<div className="flex flex-row items-center space-x-3">
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
			<div className="flex flex-col">
				<div className={`flex-1 truncate font-dungGeunMo ${nickClass}`}>
					{profile.nickName}
				</div>
				{date?.includes(':') ? (
					<div className="text-xs text-white-400">
						{dateTimeFormatting(date || '')}
					</div>
				) : (
					<div className="text-xs text-white-400">{date}</div>
				)}
			</div>
		</div>
	);
};

export default UserProfileItem;
