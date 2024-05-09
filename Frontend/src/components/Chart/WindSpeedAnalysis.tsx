
const WindAnalysis = ({ averageDailyWindSpeed }: { averageDailyWindSpeed: number }) => {
  let windInfo;

  if (averageDailyWindSpeed < 2) {
    windInfo = (
      <div>
        <p>The average daily wind speed of {averageDailyWindSpeed.toFixed(2)} mph is calm, indicating light breezes. Wind-sensitive activities like spraying should be conducted carefully.</p>
        <p>औसत दैनिक हावाको गति {averageDailyWindSpeed.toFixed(2)} mph शान्त छ, जुन हल्का बतासको संकेत गर्दछ। बतास प्रभावित गतिविधिहरू जस्तै स्प्रे गर्ने कार्य सावधानीपूर्वक गर्नुपर्दछ।</p>
      </div>
    );
  } else if (averageDailyWindSpeed >= 2 && averageDailyWindSpeed < 10) {
    windInfo = (
      <div>
        <p>The average daily wind speed of {averageDailyWindSpeed.toFixed(2)} mph indicates a gentle breeze. This level of wind is favorable for outdoor activities and natural ventilation.</p>
        <p>औसत दैनिक हावाको गति {averageDailyWindSpeed.toFixed(2)} mph हल्का बतासको संकेत गर्दछ। यो हावाको स्तर बाह्य गतिविधिहरू र प्राकृतिक वायु सञ्चारको लागि अनुकूल छ।</p>
      </div>
    );
  } else if (averageDailyWindSpeed >= 10 && averageDailyWindSpeed < 20) {
    windInfo = (
      <div>
        <p>The average daily wind speed of {averageDailyWindSpeed.toFixed(2)} mph is considered moderate. It may affect some outdoor activities and can help in dissipating air pollutants.</p>
        <p>औसत दैनिक हावाको गति {averageDailyWindSpeed.toFixed(2)} mph मध्यम मानिन्छ। यसले केहि बाहिरी गतिविधिहरूलाई प्रभावित गर्न सक्छ र हावामा रहेका प्रदूषक तत्वहरूलाई फैलाउन मद्दत गर्न सक्छ।</p>
      </div>
    );
  } else {
    windInfo = (
      <div>
        <p>The average daily wind speed of {averageDailyWindSpeed.toFixed(2)} mph is high. Strong winds may disrupt outdoor activities and can cause damage to structures and vegetation.</p>
        <p>औसत दैनिक हावाको गति {averageDailyWindSpeed.toFixed(2)} mph उच्च छ। बलियो हावाले बाहिरी गतिविधिहरूलाई बाधा पुर्‍याउन सक्छ र संरचना तथा वनस्पतिमा क्षति पुर्‍याउन सक्छ।</p>
      </div>
    );
  }

  return (
    <div className="m-2 mb-8 mx-10">
      {windInfo}
    </div>
  );
};

export default WindAnalysis;
