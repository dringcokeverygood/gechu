// import { useEffect, useCallback } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const navigation = useNavigate();

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
		</div>
	);
};

export default LoginPage;
