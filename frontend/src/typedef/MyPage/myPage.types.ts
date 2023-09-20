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
	type: string; // articles, reviews 중에 뭔지
	itemSeq: number; // article, review의 seq
	title: string;
	content: string;
	createDate: string;
	like: boolean;
	unlike: boolean;
};

export type ManageCommentCardItemType = {
	gameSeq: number;
	gameTitle: string;
	gameTitleImageUrl: string;
	commentSeq: number;
	articleSeq: number;
	content: string;
	createDate: string;
};
