/* eslint-disable import/no-extraneous-dependencies */
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

type User = {
	username: string;
	email: string;
	token?: string;
};

export const userState = atom<User>({
	key: 'user',
	default: { username: '', email: '' },
	effects_UNSTABLE: [persistAtom],
});
