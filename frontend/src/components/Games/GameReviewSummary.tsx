import React from 'react';
// import type { ChartData, ChartOptions } from 'chart.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CategoryScale, LinearScale, BarElement, Chart } from 'chart.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Bar } from 'react-chartjs-2';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';

Chart.register(CategoryScale, LinearScale, BarElement);

interface GameReviewSummaryProps {
	reviewCnt: number;
	likeCnt: number;
	dislikeCnt: number;
}
// interface BarProps {
// 	options: ChartOptions<'bar'>;
// 	data: ChartData<'bar'>;
// }

const GameReviewSummary: React.FC<GameReviewSummaryProps> = ({
	reviewCnt,
	likeCnt,
	dislikeCnt,
}) => {
	const likeRate = ((100 * likeCnt) / (likeCnt + dislikeCnt)).toFixed(2);
	const dislikeRate = ((100 * dislikeCnt) / (likeCnt + dislikeCnt)).toFixed(2);
	const options = {
		indexAxis: 'y' as const,
		plugins: {
			tooltip: {
				enabled: true,
				mode: 'index' as const,
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
			},
			{
				label: '싫어요',
				backgroundColor: '#ff5964',
				data: [dislikeCnt],
				borderRadius: 16,
				borderSkipped: 'middle' as const,
			},
		],
	};
	return (
		<div className="flex flex-col py-2 text-white-200">
			<div className="flex h-24 flex-row items-center justify-center space-x-2">
				<div className="flex flex-row items-center justify-between space-x-2 font-dungGeunMo text-xl text-blue-400">
					<MdThumbUp />
					{likeRate}%
				</div>
				<div className="flex h-8 w-[600px] flex-row items-center justify-center">
					<Bar
						options={options}
						data={data}
						className="flex justify-center"
						// style={{ height: '40px', width: '800px' }}
					/>
				</div>
				<div className="flex flex-row-reverse items-center font-dungGeunMo  text-xl text-red-400">
					<MdThumbDown />
					{dislikeRate}%
				</div>
			</div>
			<div className="flex flex-row justify-between font-dungGeunMo text-lg">
				<div>{reviewCnt}건</div>
				<div>작성하기</div>
			</div>
		</div>
	);
};

export default GameReviewSummary;
