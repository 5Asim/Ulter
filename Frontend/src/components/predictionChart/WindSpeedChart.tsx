import { Line } from 'react-chartjs-2';

import WindData from '../../services/weather/wind';

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
import WindAnalysis from '../Chart/WindSpeedAnalysis';
      
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
      

export const WindSpeedChart = () => {
    const labels = WindData.hourly.time.map(date => date.toLocaleString());
    const windSpeedValues = WindData.hourly.windSpeed10m;

    // Calculate average wind speed
    const totalWindSpeed = windSpeedValues.reduce((acc, cur) => acc + cur, 0);
    const averageWindSpeed = totalWindSpeed / windSpeedValues.length;
    const data = {
        labels,
        datasets: [
            {
                label: 'Hourly Wind Speed (mph)',
                data: WindData.hourly.windSpeed10m,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    



return (
	<div>
		<h2 className='text-lg font-semibold mx-10 mt-8 text-center'>Hourly Wind Speed Chart</h2>
		<p className="text-center font-medium text-sm my-4">Average Wind Speed: {averageWindSpeed.toFixed(2)} mph</p>
		<WindAnalysis averageDailyWindSpeed={averageWindSpeed} />	
			<Line data={data} />
	</div>
);
};

export default WindSpeedChart;
