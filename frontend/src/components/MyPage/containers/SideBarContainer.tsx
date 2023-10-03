import React, { useRef } from 'react';
import SideBar from '../components/SideBar';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import { http } from '../../../utils/http';
import { useRecoilState } from 'recoil';
import { userState } from '../../../recoil/UserAtom';

const SideBarContainer = () => {
	const fileInput = useRef() as React.MutableRefObject<HTMLInputElement>;
	const [userInfo] = useRecoilState(userState);
	const onClickUploadImgBtn = () => {
		if (!fileInput.current) {
			return;
		}
		fileInput.current.click();
	};

	const onChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = (e.currentTarget.files as FileList)[0];
		if (file) {
			const formData = new FormData();
			formData.append('file', file);
			formData.append(
				'nickname',
				new Blob([JSON.stringify({ nickname: '' })], {
					type: 'application/json',
				}),
			);
			http
				.put(`web/users/${userInfo.userSeq}`, formData, {
					'Content-Type': 'multipart/form-data',
				})
				.then((data) => {
					console.log(data);
				});
		}
	};

	const onClickUpdateNickname = () => {
		Swal.fire({
			title: '닉네임 변경',
			text: '변경할 닉네임을 입력해주세요.',
			input: 'text',
			showCancelButton: true,
			showLoaderOnConfirm: true,
			confirmButtonColor: '#1F771E',
			preConfirm: (value) => {
				if (value) {
					const formData = new FormData();
					const file = new Blob();
					formData.append(
						'nickname',
						new Blob([JSON.stringify({ nickname: value })], {
							type: 'application/json',
						}),
					);
					formData.append('file', file);
					http
						.put(`web/users/${userInfo.userSeq}`, formData, {
							'Content-Type': 'multipart/form-data',
						})
						.then((data) => {
							// 닉네임 변경이 정상적으로 처리되었다면
							console.log(data);
							Swal.fire({
								title: '변경 완료',
								text: '닉네임이 변경되었습니다.',
								icon: 'success',
								confirmButtonColor: '#1F771E',
							});
							return true;
						});
				}
				return false;
			},
			allowOutsideClick: () => !Swal.isLoading(),
		});
	};

	return (
		<SideBar
			fileInput={fileInput}
			onClickUploadImgBtn={onClickUploadImgBtn}
			onChangeProfile={onChangeProfile}
			onClickUpdateNickname={onClickUpdateNickname}
		/>
	);
};

export default SideBarContainer;
