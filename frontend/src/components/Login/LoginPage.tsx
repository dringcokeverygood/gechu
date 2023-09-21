// import { useEffect, useCallback } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const navigation = useNavigate();
	// const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
	// const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
	// console.log('id:', CLIENT_ID);
	// // oauth 요청 URL
	// const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	// const onClickLoginButton = useCallback(() => {
	// 	window.location.href = kakaoURL;
	// 	console.log(kakaoURL);
	// }, []);

	useEffect(() => {
		if (localStorage.getItem('login')) {
			navigation('/home');
		}
	}, []);

	return (
		<div className="bg-white-100">
			<p>카카오계정 로그인</p>
			<a href="http://j9d203.p.ssafy.io:9090/oauth2/authorization/kakao?redirect_uri=http://j9d203.p.ssafy.io/oauth2/redirect">
				a태그 로그인
			</a>
			<br />
			{/* <button className="bg-green-500" onClick={onClickLoginButton}>
				<img src="" alt="로그인" />
			</button> */}
		</div>
	);
};

export default LoginPage;
