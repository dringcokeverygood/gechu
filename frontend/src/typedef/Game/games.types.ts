import { FilterType } from './filter.types';
import { UserProfileType } from '../main.types';

export type GamePreviewType = {
	seq: number;
	gameTitle: string;
	gameTitleImageUrl: string;
	estimatePercent: number;
	genres: string[];
	platforms: string[];
};

export type GameInfoType = {
	seq: number;
	gameTitle: string;
	gameTitleImageUrl: string;
	develop: string;
	publish: string;
	createDate: string;
	platforms: string[];
	genres: string[];
	metaScore: number;
	openScore: number;
};

export type GameReviewType = {
	reviewSeq: number;
	estimateSeq: number;
	userProfile: UserProfileType;
	like: string;
	content: string;
	createDate: string;
};

export type GameArticlePreviewType = {
	seq: number;
	gameSeq: number;
	gameTitle: string;
	userProfile: UserProfileType;
	articleTitle: string;
	imageUrl: string;
	commentCount: number;
};

export type GameArticleType = {
	seq: number;
	gameSeq: number;
	gameTitle: string;
	userProfile: UserProfileType;
	// userSeq: number;
	// userNickname: string;
	articleTitle: string;
	content: string;
	imageUrl: string;
	createDate: string;
};

export type GameListType = {
	genreFilter: FilterType;
	platformFilter: FilterType;
	games: GamePreviewType[];
	loading: boolean;
};

export type GameCommentType = {
	seq: number;
	articleSeq: number;
	userProfile: UserProfileType;
	content: string;
	createDate: string;
};

export type LikeGameItemType = {
	gameSeq: number;
	gameTitle: string;
	gameTitleImageUrl: string;
};

export type EstimatedGameItemType = {
	gameSeq: number;
	gameTitle: string;
	gameTitleImageUrl: string;
	preference: { like: boolean; dislike: boolean };
	onClickPref: (e: React.MouseEvent) => void;
};
