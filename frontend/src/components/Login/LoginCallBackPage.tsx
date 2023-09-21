import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

// 인가코드 백으로 보내는 작업 하는 곳

const LoginCallBackPage = () => {
	const navigate = useNavigate();
	const code = new URL(window.location.href).searchParams.get('code');
	console.log('code: ', code);
	//인가코드 백으로 보내는 코드

	useEffect(() => {
		const kakaoLogin = async () => {
			await axios({
				method: 'POST',
				url: `http://j9d203.p.ssafy.io/api/web/auth?code=${code}`,
				headers: {
					'Content-Type': 'application/json;charset=utf-8', //json형태로 데이터를 보내겠다는뜻
				},
			})
				.then((res) => {
					//백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
					console.log(res);
					//계속 쓸 정보들( ex: 이름) 등은 localStorage에 저장해두자
					localStorage.setItem('name', res.data.account.kakaoName);
					navigate('/');
				})
				.catch((err) => {
					console.log(err);
				});
		};
		kakaoLogin();
	});

	return (
		<div className="bg-white-100">
			<div>
				<p>로그인 중입니다.</p>
				<p>잠시만 기다려주세요.</p>
			</div>
		</div>
	);
};

export default LoginCallBackPage;
