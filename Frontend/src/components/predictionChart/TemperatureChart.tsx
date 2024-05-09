import React from 'react';
import { Line } from 'react-chartjs-2';

import TemperatureData from "../../services/weather/temperature";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	TimeScale,
	Filler
      } from 'chart.js';
      
      ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	TimeScale,
	Title,
	Tooltip,
	Legend,
	Filler
      );
      

export const TemperatureChart = () => {
    const labels = TemperatureData.hourly.time.map(date => date.toLocaleString());
    const data = {
        labels,
        datasets: [
            {
                label: 'Hourly Temperature (°C)',
                data: TemperatureData.hourly.temperature2m,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    



return (
	<div>
		<h2>Hourly Temperature Chart</h2>
			<Line data={data} />
	</div>
);
};

export default TemperatureChart;
