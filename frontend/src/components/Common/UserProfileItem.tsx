import React from 'react';
import { UserProfileType } from '../../typedef/main.types';
import { images } from '../../constants/images';

const UserProfileItem = ({ profile }: { profile: UserProfileType }) => {
	return (
		<div className="flex flex-row items-center space-x-4">
			{profile.imageUrl ? (
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-green-400"
					src={profile.imageUrl}
					alt="profile-image"
				/>
			) : (
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-green-400"
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
