import React, { useCallback, useState } from 'react';
import ManageCardItem from '../components/ManageCardItem';
import { ManageCardItemType } from '../../../typedef/MyPage/myPage.types';

const ManageCardItemContainer = ({
	item,
	onClickDeleteBtn,
	getMyList,
}: {
	item: ManageCardItemType;
	onClickDeleteBtn: (seq: number) => void;
	getMyList: () => void;
}) => {
	const [updateModalFlag, setUpdateModalFlag] = useState(false);
	const onChangeUpdateModalFlag = useCallback(() => {
		setUpdateModalFlag(!updateModalFlag);
	}, [updateModalFlag]);

	return (
		<ManageCardItem
			item={item}
			onClickDeleteBtn={onClickDeleteBtn}
			updateModalFlag={updateModalFlag}
			onChangeUpdateModalFlag={onChangeUpdateModalFlag}
			getMyList={getMyList}
		/>
	);
};

export default React.memo(ManageCardItemContainer);
