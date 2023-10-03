import React from 'react';
import LoginModal from '../LoginModal';

type Props = {
	onClickLoginModalBtn: () => void;
};

const LoginModalContainer = ({ onClickLoginModalBtn }: Props) => {
	return <LoginModal onClickLoginModalBtn={onClickLoginModalBtn} />;
};

export default LoginModalContainer;
