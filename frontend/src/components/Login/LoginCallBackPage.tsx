import { useEffect, useState } from 'react';

const LoginCallBackPage = () => {
	const [profile, setProfile] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Kakao API를 통해 프로필 정보 요청
		fetch('/v1/api/talk/profile')
			.then((response) => response.json())
			.then((data) => {
				setProfile(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<div className="bg-white-100">
				<div>
					<p>로그인 중</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="bg-white-100">
				<div>
					<p>로그인 실패</p>
				</div>
			</div>
		);
	}

	if (profile) {
		return (
			<div className="bg-white-100">
				<div>
					<p>로그인 성공</p>
				</div>
			</div>
		);
	}

	return null;
};

export default LoginCallBackPage;
