export type UserType = {
	userSeq: number;
	imageUrl: string;
	userName: string;
	userId: string;
	token?: string;
};

export type GameNewsPreviewType = {
	headline: string;
	content: string;
	gameSwq: string;
	gameSlug: string;
	url: string;
	imageUrl: string;
};

export type UserProfileType = {
	imageUrl: string;
	nickName: string;
	seq: number;
	userId: string;
};
