import React from 'react';
import UserProfileItem from '../Common/UserProfileItem';
import { GameArticlePreviewType } from '../../typedef/Game/games.types';
import { LiaCommentDotsSolid } from 'react-icons/lia';
import { images } from '../../constants/images';

const GameArticlePreviewCard = ({
	article,
}: {
	article: GameArticlePreviewType;
}) => {
	return (
		<div className="mb-4 flex h-[280px] flex-col space-y-3 rounded-md bg-white-900 p-4 text-white-200 hover:bg-white-800">
			<UserProfileItem profile={article.userProfile} />
			<img
				src={article.imageUrl ? article.imageUrl : images.noImage1}
				alt="article-thumbnail"
				className="h-2/3 w-fit self-center"
			/>
			<div className="flex flex-row items-center justify-between">
				<div className="truncate font-dungGeunMo text-xl">
					{article.articleTitle}
				</div>
				<div className="flex flex-row items-center space-x-2">
					<LiaCommentDotsSolid size={20} />
					<div className="font-dungGeunMo text-lg">00</div>
				</div>
			</div>
		</div>
	);
};

export default GameArticlePreviewCard;
