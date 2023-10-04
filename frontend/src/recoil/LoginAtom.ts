/* eslint-disable import/no-extraneous-dependencies */
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoginAtom = atom<boolean>({
	key: 'login',
	default: localStorage.getItem('token') ? true : false,
	effects_UNSTABLE: [persistAtom],
});
