import React from 'react';
import { images } from '../../constants/images';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';

type Props = {
	onClickLoginModalBtn: () => void;
	onClickSetUrl: () => void;
};

const LoginModal = ({ onClickLoginModalBtn, onClickSetUrl }: Props) => {
	return (
		<div className="fixed left-0 top-0 z-50 flex h-full w-full text-white-950">
			<div
				className="h-full w-full bg-white-950 bg-opacity-50"
				onClick={onClickLoginModalBtn}
			>
				{' '}
			</div>
			<div className="fixed left-1/2 top-1/2 flex  h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-12 rounded-3xl bg-white-100 text-white-950">
				<Icon
					icon="pixelarticons:close"
					width="32"
					height="32"
					className="absolute right-10 top-10 cursor-pointer"
					onClick={onClickLoginModalBtn}
				/>
				<div className="font-dungGeunMo text-[48px]">SNS LOGIN</div>
				<div onClick={onClickSetUrl}>
					<a
						href="http://j9d203.p.ssafy.io:9090/oauth2/authorization/kakao?redirect_uri=http://j9d203.p.ssafy.io/oauth2/redirect"
						className="flex flex-col items-center gap-3"
					>
						<img src={images.kakaoLogin} className="h-[100px] w-[100px]" />
						<p className="font-dungGeunMo">카카오</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default LoginModal;
