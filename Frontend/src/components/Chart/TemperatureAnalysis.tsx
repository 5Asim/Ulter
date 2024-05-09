

const TemperatureAnalysis = ({ averageDailyTemperature }: { averageDailyTemperature: number }) => {
  let temperatureInfo;

  if (averageDailyTemperature < 10) {
    temperatureInfo = (
      <div>
        <p>The average daily temperature of {averageDailyTemperature.toFixed(1)}°C indicates a cold climate. Heating systems are essential, and crops grown should be cold-tolerant.</p>
        <p>औसत दैनिक तापक्रम {averageDailyTemperature.toFixed(1)}°C चिसो हावापानीलाई संकेत गर्दछ। तापन प्रणालीहरू आवश्यक छन्, र उमालेका बालीहरू उम्लिनुपर्दछ।</p>
      </div>
    );
  } else if (averageDailyTemperature >= 10 && averageDailyTemperature < 20) {
    temperatureInfo = (
      <div>
        <p>The average daily temperature of {averageDailyTemperature.toFixed(1)}°C is moderate, ideal for temperate crops. Consider layering clothing for comfort throughout the day.</p>
        <p>औसत दैनिक तापक्रम {averageDailyTemperature.toFixed(1)}°C मध्यम छ, शीतोष्ण बालीहरूका लागि उपयुक्त छ। दिनभरि आरामका लागि लुगा थप्नुहोस्।</p>
      </div>
    );
  } else {
    temperatureInfo = (
      <div>
        <p>The average daily temperature of {averageDailyTemperature.toFixed(1)}°C is high, suitable for tropical crops. Air conditioning and hydration are crucial to handle the heat.</p>
        <p>औसत दैनिक तापक्रम {averageDailyTemperature.toFixed(1)}°C उच्च छ, उष्णकटिबन्धीय बालीहरूका लागि उपयुक्त छ। गर्मी सामना गर्न एयर कन्डिसनिङ र पानी पिउने कुरा महत्त्वपूर्ण छ।</p>
      </div>
    );
  }

  return (
    <div className="m-2 mb-8 mx-10">
      {temperatureInfo}
    </div>
  );
};

export default TemperatureAnalysis;
