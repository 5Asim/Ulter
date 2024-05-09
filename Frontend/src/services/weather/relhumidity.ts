import { fetchWeatherApi } from 'openmeteo';
import { getCurrentPosition } from '../location';
	
const location = await getCurrentPosition();
const params = {
	"latitude": location.latitude,
	"longitude": location.longitude,
	"current": "relative_humidity_2m",
	"hourly": "relative_humidity_2m"
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();

const current = response.current()!;
const hourly = response.hourly()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const HumidityData = {
	current: {
		time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
		relativeHumidity2m: current.variables(0)!.value(),
	},
	hourly: {
		time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
			(t) => new Date((t + utcOffsetSeconds) * 1000)
		),
		relativeHumidity2m: hourly.variables(0)!.valuesArray()!,
	},
	maxHumidity: Math.max(...hourly.variables(0)!.valuesArray()!),

};

export default HumidityData;