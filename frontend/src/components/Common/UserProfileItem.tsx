import React from 'react';
import { UserProfileType } from '../../typedef/main.types';

const UserProfileItem = ({ profile }: { profile: UserProfileType }) => {
	return (
		<div className="flex flex-row items-center space-x-2">
			{profile.imageUrl ? (
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-green-400"
					src={profile.imageUrl}
					alt="profile-image"
				/>
			) : (
				<img
					className="inline-block h-10 w-10 rounded-full ring-2 ring-green-400"
					src="https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
				/>
			)}
			<div className="flex-1 font-dungGeunMo text-lg">{profile.nickName}</div>
		</div>
	);
};

export default UserProfileItem;
