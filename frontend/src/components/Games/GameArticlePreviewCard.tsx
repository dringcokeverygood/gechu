import React from 'react';
import UserProfileItem from '../Common/UserProfileItem';
import { GameArticlePreviewType } from '../../typedef/Game/games.types';
import { LiaCommentDotsSolid } from 'react-icons/lia';

const GameArticlePreviewCard = ({
	article,
}: {
	article: GameArticlePreviewType;
}) => {
	return (
		<div className="mb-4 flex h-[280px] flex-col space-y-2 rounded-md bg-white-900 px-2 py-2 text-white-200 hover:bg-white-800">
			<UserProfileItem profile={article.userProfile} />
			<img
				src={article.imageUrl}
				alt="article-thumbnail"
				className="h-2/3 w-fit self-center"
			/>
			<div className="flex flex-row items-center justify-between">
				<div className="font-dungGeunMo text-xl">{article.articleTitle}</div>
				<div className="flex flex-row items-center space-x-2">
					<LiaCommentDotsSolid size={20} />
					<div className="font-dungGeunMo text-lg">00</div>
				</div>
			</div>
		</div>
	);
};

export default GameArticlePreviewCard;
