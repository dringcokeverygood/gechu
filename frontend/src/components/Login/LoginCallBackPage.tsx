import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { LoginAtom } from '../../recoil/LoginAtom';
import { ImSpinner2 } from 'react-icons/im';
import { userState } from '../../recoil/UserAtom';
import { UrlAtom } from '../../recoil/UrlAtom';

const LoginCallBackPage = () => {
	const navigate = useNavigate();
	const code = new URL(window.location.href).searchParams.get('code');
	const setIsLogin = useSetRecoilState(LoginAtom);
	const setUserInfo = useSetRecoilState(userState);
	const toUrl = useRecoilValue(UrlAtom);

	//인가코드 백으로 보내는 코드
	useEffect(() => {
		const kakaoLogin = async () => {
			await axios({
				method: 'POST',
				url: `https://j9d203.p.ssafy.io/api/web/auth?code=${code}`,
				headers: {
					'Content-Type': 'application/json;charset=utf-8', //json형태로 데이터를 보내겠다는뜻
				},
			})
				.then((res) => {
					//백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
					localStorage.setItem('token', res.data.accessToken);
					setIsLogin(true);
					const userData = {
						userSeq: res.data.userInfo.seq,
						imageUrl: res.data.userInfo.imageUrl,
						userName: res.data.userInfo.nickName,
						userId: res.data.userInfo.userId,
						token: res.data.accessToken,
					};
					setUserInfo(userData);
					navigate(toUrl);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		kakaoLogin();
	});

	return (
		<div className="fixed top-0 flex h-screen w-full items-center justify-center">
			<ImSpinner2 className="animate-spin fill-white-200" size={64} />
		</div>
	);
};

export default LoginCallBackPage;
