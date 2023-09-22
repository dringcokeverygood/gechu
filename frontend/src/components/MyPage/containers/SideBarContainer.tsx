import React, { useRef } from 'react';
import SideBar from '../components/SideBar';
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

const SideBarContainer = () => {
	const fileInput = useRef() as React.MutableRefObject<HTMLInputElement>;
	const onClickUploadImgBtn = () => {
		if (!fileInput.current) {
			return;
		}
		fileInput.current.click();
	};

	const onChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target);
	};

	const checkDuplication = (newNickname: string) => {
		// 닉네임 중복 여부 확인 (true : 중복 / false : 사용가능)
		console.log(newNickname);
		return false;
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
					if (checkDuplication(value)) {
						Swal.showValidationMessage(
							'닉네임이 중복됩니다. 다른 닉네임을 입력해주세요.',
						);
						return false;
					} else {
						Swal.fire({
							title: '변경 완료',
							text: '닉네임이 변경되었습니다.',
							icon: 'success',
							confirmButtonColor: '#1F771E',
						});
						return true;
					}
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
