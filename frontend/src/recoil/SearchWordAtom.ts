import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const SearchWordAtom = atom<string>({
	key: 'searchWord',
	default: '',
	effects_UNSTABLE: [persistAtom],
});
