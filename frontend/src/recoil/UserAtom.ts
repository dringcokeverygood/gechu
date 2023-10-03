/* eslint-disable import/no-extraneous-dependencies */
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

type User = {
	userSeq: number;
	imageUrl: string;
	userName: string;
	userId: string;
	token?: string;
};

export const userState = atom<User>({
	key: 'user',
	default: { userSeq: 0, userName: '', userId: '', imageUrl: '' },
	effects_UNSTABLE: [persistAtom],
});
