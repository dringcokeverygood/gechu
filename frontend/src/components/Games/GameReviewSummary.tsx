import React from 'react';
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

Chart.register(CategoryScale, LinearScale, BarElement, ChartjsPluginStacked100);

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
		<div className="flex flex-col pb-2 text-white-200">
			<div className="flex h-24 flex-row items-center justify-around space-x-2 px-24">
				<div className="flex flex-row items-center text-2xl text-blue-400">
					<MdThumbUp />
					<p className="px-2 font-dungGeunMo">{likeRate}%</p>
				</div>
				<div className="flex w-full flex-row items-center justify-center">
					<Bar
						options={options}
						data={data}
						className="flex justify-center"
						// style={{ height: '40px', width: '800px' }}
					/>
				</div>
				<div className="flex flex-row-reverse items-center text-2xl text-red-400">
					<MdThumbDown />
					<p className="px-2 font-dungGeunMo">{dislikeRate}%</p>
				</div>
			</div>
<<<<<<< frontend/src/components/Games/GameReviewSummary.tsx
			<div className="flex flex-row items-center justify-start space-x-4 px-4 text-xl">
=======
			<div className="flex flex-row items-center justify-start space-x-4 text-xl">
>>>>>>> frontend/src/components/Games/GameReviewSummary.tsx
				<div className="font-dungGeunMo">{reviewCnt}건</div>
				<button>
					<Icon icon="pixelarticons:edit-box" />
				</button>
			</div>
		</div>
	);
};

export default GameReviewSummary;
