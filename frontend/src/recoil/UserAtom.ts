/* eslint-disable import/no-extraneous-dependencies */
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { UserType } from '../typedef/main.types';

const { persistAtom } = recoilPersist();

export const userState = atom<UserType>({
	key: 'user',
	default: { userSeq: 4, userName: '', userId: '', imageUrl: '' },
	effects_UNSTABLE: [persistAtom],
});
