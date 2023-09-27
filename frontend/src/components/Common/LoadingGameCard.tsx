import React from 'react';

const LoadingGameCard = () => {
	return (
		<div className="flex h-[310px] w-[240px] flex-col rounded-md bg-white-950">
			<div className="flex h-[240px] w-[240px] items-center justify-center rounded-t-md p-5">
				<div className="h-full w-full animate-pulse rounded-md bg-white-800">
					{' '}
				</div>
			</div>
			<div className="flex w-full flex-1 flex-col justify-between overflow-hidden rounded-b-md px-5 py-3 text-white-200">
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

export default LoadingGameCard;
