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
import TemperatureAnalysis from '../Chart/TemperatureAnalysis';
      
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
    const temperatureValues = TemperatureData.hourly.temperature2m;

    // Calculate average temperature
    const totalTemperature = temperatureValues.reduce((acc, cur) => acc + cur, 0);
    const averageTemperature = totalTemperature / temperatureValues.length;
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
		<h2 className='text-lg font-semibold mx-10 mt-8 text-center'>Hourly Temperature Chart</h2>
		<p className="text-center font-medium text-sm my-4">Average Temperature: {averageTemperature.toFixed(2)} °C</p>
		<TemperatureAnalysis averageDailyTemperature={averageTemperature} />
		<Line data={data} />
	</div>
);
};

export default TemperatureChart;
