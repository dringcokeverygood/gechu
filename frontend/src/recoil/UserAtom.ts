/* eslint-disable import/no-extraneous-dependencies */
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

type User = {
	userName: string;
	userId: string;
	token?: string;
};

export const userState = atom<User>({
	key: 'user',
	default: { userName: '', userId: '' },
	effects_UNSTABLE: [persistAtom],
});
