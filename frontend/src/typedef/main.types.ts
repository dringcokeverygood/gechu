export type UserType = {
	userSeq: number;
	imageUrl: string;
	userName: string;
	userId: string;
	token?: string;
};

export type GameNewsPreviewType = {
	news_seq: number;
	headline: string;
	content: string;
	company: string;
	url: string;
	image_url: string;
	upload_date: string;
};

export type UserProfileType = {
	imageUrl: string;
	nickName: string;
	seq: number;
	userId: string;
};
