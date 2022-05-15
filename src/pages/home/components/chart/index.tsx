import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {Paper} from "@mui/material";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Results Chart',
		},
	},
};

const labels = ['French-Slovakia', 'Germany-Canada', 'USA-Latvia'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Prediction',
			data: labels.map(() => [0,4]),
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Actual',
			data: labels.map(() => [0,2]),
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
};

export function Chart() {
	return(
		<Paper sx={{padding: 2}}>
			<Bar options={options} data={data} />
		</Paper>
	)
}
