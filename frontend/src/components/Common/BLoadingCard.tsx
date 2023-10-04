import React from 'react';

const BLoadingCard = () => {
	return (
		<div className="flex h-[346px] w-[282px] flex-col rounded-md bg-white-950">
			<div className="flex w-full items-center justify-center rounded-t-md ">
				<div className=" h-[282px] w-full animate-pulse rounded-md bg-white-800">
					{' '}
				</div>
			</div>
			<div className="flex w-full flex-1 flex-col justify-between  overflow-hidden rounded-b-md py-3 text-white-200">
				<div className="w-full animate-pulse whitespace-pre-wrap rounded-lg bg-white-800">
					{' '}
				</div>
				<div className="w-full animate-pulse whitespace-pre-wrap rounded-lg bg-white-800">
					{' '}
				</div>
			</div>
		</div>
	);
};

export default BLoadingCard;
