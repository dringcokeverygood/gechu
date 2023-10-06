import React from 'react';
import LoginModal from '../LoginModal';
import { useSetRecoilState } from 'recoil';
import { UrlAtom } from '../../../recoil/UrlAtom';

type Props = {
	onClickLoginModalBtn: () => void;
};

const LoginModalContainer = ({ onClickLoginModalBtn }: Props) => {
	const setToUrl = useSetRecoilState(UrlAtom);

	const onClickSetUrl = () => {
		const toUrl: string = window.location.pathname;
		setToUrl(toUrl);
	};

	return (
		<LoginModal
			onClickLoginModalBtn={onClickLoginModalBtn}
			onClickSetUrl={onClickSetUrl}
		/>
	);
};

export default LoginModalContainer;
