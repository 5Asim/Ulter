import { Donut } from "../components/donut";
import WindData from "../services/weather/wind";
import HumidityData from "../services/weather/relhumidity";
import TemperatureData from "../services/weather/temperature";

export default function Home() {
		const formattedTemperature = parseFloat(Number(TemperatureData.current.temperature2m).toFixed(2));
		const formattedMaxTemperature = parseFloat(Number(TemperatureData.maxTemperature).toFixed(2));
		const formattedHumidity = parseFloat(Number(HumidityData.current.relativeHumidity2m).toFixed(2));
		const formattedMaxHumidity = parseFloat(Number(HumidityData.maxHumidity).toFixed(2));
		const formattedWind = parseFloat(Number(WindData.current.windSpeed10m).toFixed(5));
		const formattedMaxWind = parseFloat(Number(WindData.maxWindSpeed).toFixed(5));

		return(
			
			<div className="">
				<div className="flex flex-row justify-center">
				<Donut value={formattedTemperature} standard={formattedMaxTemperature} unit="C" label="Temperature" />
				<Donut value={formattedHumidity} standard={formattedMaxHumidity} unit="%" label="Humidity" />
				<Donut value={formattedWind} standard={formattedMaxWind} unit="m/s" label="Wind" />
				{/* <Donut value={formattedRain} standard={formattedMaxRain} unit="mm" label="Rain" /> */}
			
				</div>

			</div>
		)
}