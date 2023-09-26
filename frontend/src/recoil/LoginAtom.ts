/* eslint-disable import/no-extraneous-dependencies */
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoginAtom = atom<boolean>({
	key: 'test-login',
	default: false,
	effects_UNSTABLE: [persistAtom],
});
