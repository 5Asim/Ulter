import  { useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { SensorData } from '../../services/api/apiservices';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
interface SensorData{
	timestamp: string;
	soil_moisture: number;
	temperature: number;

}

function SensorDataComponent() {
	const [sensorData, setSensorData] = useState<SensorData[]>([]); // Add type annotation for sensorData
	useEffect(() => {
		const fetchData = async () => {
			const allData = await SensorData();
			const filteredData = filterDataWithinHour(allData);
			setSensorData(filteredData);
		};
		fetchData();
	}, []);

	const filterDataWithinHour = (data: SensorData[]) => {
		const now = new Date();
		const oneHourBefore = new Date(now.getTime() - 60 * 60 * 1000); // 1 hour before
		const oneHourAfter = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour after
		return data.filter(item => {
			const itemDate = new Date(item.timestamp);
			return itemDate >= oneHourBefore && itemDate <= oneHourAfter;
		});
	};
	const labels = sensorData.map(data => new Date(data.timestamp).toLocaleTimeString());
	const soilMoistureData = sensorData.map(data => data.soil_moisture);
	const temperature = sensorData.map((data) => data.temperature);
	const data1 = {
		labels: labels,
		datasets: [ // Fix: change '=' to ':'
			{
				label: 'Soil Moisture',
				data: soilMoistureData,
				fill: false,
				borderColor: 'rgb(55, 10, 192)',
				tension: 0.1
			},
			// {
			// 	label: 'Temperature',
			// 	data: temperature,
			// 	fill: false,
			// 	borderColor: 'rgb(75, 192, 192)',
			// 	tension: 0.1
			// }
		]
	}
	const data2 = {
		labels: labels,
		datasets: [ // Fix: change '=' to ':'
			{
				label: 'Soil Temperature',
				data: temperature,
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			}
		]
	}

	
	
	
	return (
		<div className='mx-12 mt-10 flex flex-row gap-20'>
			<div style={{"width":500}}>
				<Line data={data1} />
				<h1 className='font-bold text-lg text-center'>Soil Moisture</h1>
				
			</div>
			<div style={{"width":500}}>
				
				<Line data={data2} />
				<h1 className='font-bold text-lg text-center'>Soil Tempearture</h1>
			</div>
			
			
		</div>
	);
}

export default SensorDataComponent;
