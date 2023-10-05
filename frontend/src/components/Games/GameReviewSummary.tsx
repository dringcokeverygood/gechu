import React from 'react';
import { GetEstimate } from './containers/GameReviewContainer';
// import type { ChartData, ChartOptions } from 'chart.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CategoryScale, LinearScale, BarElement, Chart } from 'chart.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Bar } from 'react-chartjs-2';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ChartjsPluginStacked100 from 'chartjs-plugin-stacked100';
import ReviewModalContainer from './containers/ReviewModalContainer';

Chart.register(CategoryScale, LinearScale, BarElement, ChartjsPluginStacked100);

interface GameReviewSummaryProps {
	fetchReviews: () => void;
	reviewCnt: number;
	likeCnt: number;
	dislikeCnt: number;
	modalFlag: boolean;
	onChangeModalFlag: () => void;
	myEstim: GetEstimate;
}

const GameReviewSummary = ({
	fetchReviews,
	reviewCnt,
	likeCnt,
	dislikeCnt,
	modalFlag,
	onChangeModalFlag,
	myEstim,
}: GameReviewSummaryProps) => {
	const totalCnt = likeCnt + dislikeCnt;
	const likeRate =
		totalCnt !== 0 ? ((100 * likeCnt) / totalCnt).toFixed(2) : '0.00';
	const dislikeRate =
		totalCnt !== 0 ? ((100 * dislikeCnt) / totalCnt).toFixed(2) : '0.00';

	console.log(myEstim);

	const options = {
		indexAxis: 'y' as const,
		plugins: {
			stacked100: {
				enable: true,
				replaceTooltipLabel: false,
			},
		},
		responsive: true,
		aspectRatio: 24,
		maintainAspectRatio: false,
		layout: {
			padding: 0,
		},
		scales: {
			x: {
				stacked: true,
				display: false,
				// ticks: {
				// 	beginAtZero: true,
				// 	max: 100,
				// },
			},
			y: {
				stacked: true,
				display: false,
			},
		},
	};
	const data = {
		labels: [''],
		datasets: [
			{
				label: '좋아요',
				backgroundColor: '#7390ff',
				data: [likeCnt],
				borderRadius: 16,
				borderSkipped: 'middle' as const,
				barThickness: 20,
			},
			{
				label: '싫어요',
				backgroundColor: '#ff5964',
				data: [dislikeCnt],
				borderRadius: 16,
				borderSkipped: 'middle' as const,
				barThickness: 20,
			},
		],
	};
	return (
		<div className="flex flex-col pb-6 text-white-200">
			{/* 바차트 */}
			<div className="flex h-24 flex-row items-center justify-around space-x-2 px-24">
				<div className="flex flex-row items-center text-2xl text-blue-400">
					<MdThumbUp />
					<p className="px-2 font-dungGeunMo">{likeRate}%</p>
				</div>
				<div className="flex w-full flex-row items-center justify-center">
					{totalCnt > 0 ? (
						<Bar
							options={options}
							data={data}
							className="flex justify-center"
						/>
					) : (
						<div className="flex w-full justify-center rounded-lg bg-white-600 font-dungGeunMo text-lg">
							등록된 평가가 없습니다.
						</div>
					)}
				</div>
				<div className="flex flex-row-reverse items-center text-2xl text-red-400">
					<MdThumbDown />
					<p className="px-2 font-dungGeunMo">{dislikeRate}%</p>
				</div>
			</div>
			{/* 리뷰건수와 생성버튼 */}
			<div className="flex flex-row items-center justify-start space-x-4 px-4 text-xl">
				<div className="font-dungGeunMo">{reviewCnt}건</div>
				{!myEstim?.estimate?.reviewSeq && (
					<button onClick={onChangeModalFlag}>
						<Icon icon="pixelarticons:edit-box" />
					</button>
				)}
			</div>

			{/* 모달창 */}
			{modalFlag && (
				<ReviewModalContainer
					fetchReviews={fetchReviews}
					onChangeModalFlag={onChangeModalFlag}
					myEstim={myEstim}
				/>
			)}
		</div>
	);
};
export default GameReviewSummary;
