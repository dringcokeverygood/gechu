import { LikeGameItemType } from '../Game/games.types';

export type DashBoardType = {
	LikeGames: LikeGameItemType[];
	modalFlag: boolean;
	onClick: (e: React.MouseEvent) => void;
};

export type ManageCardItemType = {
	gameSeq: number;
	gameTitle: string;
	gameTitleImageUrl: string;
	type: string; // articles, comment, reviews 중에 뭔지
	itemSeq: number; // article, comment, review의 seq
	title: string;
	content: string;
	createDate: string;
};
