import axios from 'axios';

// 인가코드 백으로 보내는 작업 하는 곳

const LoginCallBackPage = () => {
	const code = new URL(window.location.href).searchParams.get('code');
	// console.log('code: ', code);

	// 요청을 보낼 URL 및 데이터
	const url = 'https://kauth.kakao.com/oauth/token';
	const data = {
		grant_type: 'authorization_code',
		client_id: process.env.REACT_APP_KAKAO_CLIENT_ID,
		redirect_uri: 'https://j9d203.p.ssafy.io/login/oauth2/code/kakao',
		code: code,
	};

	// Axios를 사용하여 HTTP POST 요청 보내기
	axios
		.post(url, null, {
			params: data,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then((response) => {
			console.log('응답 데이터:', response.data);
			// 요청이 성공하면 응답 데이터를 출력합니다.
		})
		.catch((error) => {
			console.error('오류:', error);
			// 요청이 실패하면 오류를 출력합니다.
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
