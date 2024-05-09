import { fetchWeatherApi } from 'openmeteo';
import { getCurrentPosition } from '../location';

// Assuming that getCurrentPosition and fetchWeatherApi are correctly defined and imported


// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

export async function fetchWeatherForCurrentLocation() {
    try {
        const location = await getCurrentPosition();
        const params = {
            "latitude": location.latitude,
            "longitude": location.longitude,
            "hourly": "precipitation"
        };
        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];
        const utcOffsetSeconds = response.utcOffsetSeconds();
        const hourly = response.hourly()!

        return {
            time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
                t => new Date((t + utcOffsetSeconds) * 1000)
            ),
            precipitation: hourly.variables(0)!.valuesArray()!,
        };
    } catch (error) {
        console.error("Error getting location or weather data:", error);
        throw error;  // Rethrow to handle it in the caller if needed
    }
}
