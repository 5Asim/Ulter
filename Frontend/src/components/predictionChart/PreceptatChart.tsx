
import { Line } from 'react-chartjs-2';

import PrecipitationData from '../../services/weather/precipitation';
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
import PrecipitationAnalysis from '../Chart/PrecipitationAnalysis';
      
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
      

export const PrecipitationChart = () => {
    const labels = PrecipitationData.hourly.time.map(date => date.toLocaleString());
    const precipitationValues = PrecipitationData.hourly.precipitation;
    const totalPrecipitation = precipitationValues.reduce((acc, cur) => acc + cur, 0);
    const averagePrecipitation = totalPrecipitation / precipitationValues.length;

    
    const data = {
        labels,
        datasets: [
            {
                label: 'Hourly Precipitation (mm)',
                data: PrecipitationData.hourly.precipitation,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    



return (
	<div>
		<h2 className='text-lg font-semibold mx-10 mt-8 text-center'>Hourly Precipitation Chart</h2>
		<p className="mx-10 font-medium text-sm my-4">Average Precipitation: {averagePrecipitation.toFixed(4)} mm</p>
		<PrecipitationAnalysis averageDailyPrecipitation={averagePrecipitation} />
		<div className=''>
		<Line data={data} />
		
		</div>
	</div>
);
};

export default PrecipitationChart;
