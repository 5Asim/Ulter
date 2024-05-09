// import 'chartjs-adapter-moment';
// import { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
// import { fetchWeatherForCurrentLocation } from '../services/weather/precipitation';
// import PrecipitationAnalysis from '../components/Chart/PrecipitationAnalysis';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

// interface WeatherData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     borderColor: string;
//     backgroundColor: string;
//   }[];
// }

// export const PrecipitationChart = () => {
//   const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
//   const [averageDailyPrecipitation, setAverageDailyPrecipitation] = useState<number | null>(null);

//   useEffect(() => {
//     async function loadWeatherData() {
//       try {
//         const data = await fetchWeatherForCurrentLocation();
// const formattedLabels = data.time.map((timestamp) => new Date(timestamp).toISOString());

// // Calculate average daily precipitation
// const dailyPrecipitations: { [key: string]: number[] } = data.precipitation.reduce((acc: { [key: string]: number[] }, curr, idx) => {
// 	const day = formattedLabels[idx].slice(0, 10); // Extract the date part
// 	if (!acc[day]) {
// 		acc[day] = [];
// 	}
// 	acc[day].push(curr);
// 	return acc;
// }, {});

// const averageDailyPrecipitationValues = Object.values(dailyPrecipitations).map((dayPrecipitations) =>
// 	dayPrecipitations.reduce((a, b) => a + b, 0) / dayPrecipitations.length
// );
//         const averageDailyPrecipitation = averageDailyPrecipitationValues.reduce((a, b) => a + b, 0) / averageDailyPrecipitationValues.length;
//         setAverageDailyPrecipitation(averageDailyPrecipitation);


//         setWeatherData({
//           labels: formattedLabels,
//           datasets: [
//             {
//               label: 'Precipitation (mm)',
//               data: Array.from(data.precipitation),
//               borderColor: 'rgba(75, 192, 192, 1)',
//               backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             },
//           ],
//         });
//       } catch (error) {
//         console.error('Failed to fetch weather data', error);
//       }
//     }
//     loadWeatherData();
//   }, []);

//   return (
//     <div>
//       <h1 className='text-lg mx-10 font-bold'>Weather Forecast ( मौसम पूर्वानुमान )</h1>
//       {weatherData && averageDailyPrecipitation !== null  ? (
//         <>
		
	
//           <Line
//             data={weatherData}
//             options={{
//               responsive: true,
//               plugins: {
//                 legend: { position: 'top' },
//                 title: { display: true, text: 'Hourly Precipitation Forecast' },
//               },
//               scales: {
//                 x: {
//                   type: 'time',
//                   time: {
//                     unit: 'hour',
//                     displayFormats: { hour: 'MMM D, hA' },
//                   },
//                   title: { display: true, text: 'Time' },
//                 },
//                 y: {
//                   beginAtZero: true,
//                   title: { display: true, text: 'Precipitation (mm)' },
//                 },
//               },
//             }}
//           />
// 		<p className='font-semibold text-lg mx-10'>Average Daily Precipitation (औसत दैनिक वर्षा): {averageDailyPrecipitation.toFixed(2)} mm</p>
// 		<PrecipitationAnalysis averageDailyPrecipitation={averageDailyPrecipitation} />
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };