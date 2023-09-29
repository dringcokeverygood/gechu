/* eslint-disable import/no-extraneous-dependencies */
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const UserAtom = atom({
	key: 'UserInfo',
	default: {},
	effects_UNSTABLE: [persistAtom],
});
