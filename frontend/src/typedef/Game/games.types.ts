export type GamePreviewType = {
	gameSeq: number;
	gameTitle: string;
	gameTitleImageUrl: string;
	develop: string;
	publish: string;
	createDate: string;
	estimatePercent: number;
	genre: string;
	platform: string;
};

export type GameInfoType = {
	seq: number;
	gameTitle: string;
	develop: string;
	publish: string;
	metaScore: number;
	openScore: number;
};

export type GameReviewType = {
	seq: number;
	gameSeq: number;
	gameTitle: string;
	userSeq: number;
	userNickname: string;
	estimate: string;
	content: string;
};

export type GameArticlePreviewType = {
	seq: number;
	gameSeq: number;
	gameTitle: string;
	userSeq: number;
	userNickname: string;
	articleTitle: string;
	content: string;
	imageUrl: string;
	createDate: string;
};

export type GameArticleType = {
	seq: number;
	gameSeq: number;
	gameTitle: string;
	userSeq: number;
	userNickname: string;
	articleTitle: string;
	content: string;
	imageUrl: string;
	createDate: string;
};

export type GameCommentType = {
	seq: number;
	articleSeq: number;
	userSeq: number;
	userNickname: string;
	content: string;
	createDate: string;
};
