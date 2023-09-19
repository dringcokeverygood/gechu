import { LikeGameItemType } from '../Game/games.types';

export type DashBoardType = {
	LikeGames: LikeGameItemType[];
	modalFlag: boolean;
	onClick: (e: React.MouseEvent) => void;
};
