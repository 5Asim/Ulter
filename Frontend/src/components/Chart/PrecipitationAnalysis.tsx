
const PrecipitationAnalysis = ({ averageDailyPrecipitation }: { averageDailyPrecipitation: number }) => {
  let precipitationInfo;

  if (averageDailyPrecipitation < 0.1) {
    precipitationInfo = (
      <div>
        <p className="text-sm ">The average daily precipitation of {averageDailyPrecipitation.toFixed(2)} mm is extremely low, indicating an arid or semi-arid climate.Rainfed agriculture would be challenging without irrigation or water management strategies.</p>
	<p className="text-sm mt-1">मिमिको औसत दैनिक वर्षा अत्यन्तै कम छ, जुन सुक्खा वा अर्ध-सुक्खा मौसमलाई संकेत गर्दछ। सिंचाई वा पानी व्यवस्थापन रणनीति बिना वर्षामा आधारित कृषि चुनौतीपूर्ण हुनेछ।</p>
      </div>
    );
  } else if (averageDailyPrecipitation >= 0.1 && averageDailyPrecipitation < 2.5) {
    precipitationInfo = (
      <div>
        <p>The average daily precipitation of {averageDailyPrecipitation.toFixed(2)} mm is relatively low, indicating a dry climate.Supplemental irrigation may be required for successful crop production.Drought-tolerant crop varieties and water conservation measures should be considered.</p>
	<p>मिलिमिटरको औसत दैनिक वर्षा अपेक्षाकृत कम छ, सुख्खा हावापानीलाई संकेत गर्दछ। सफल बाली उत्पादनको लागि पूरक सिंचाई आवश्यक हुन सक्छ। खडेरी-सहनशील बाली प्रजातिहरू र पानी संरक्षण उपायहरू विचार गर्नुपर्छ।</p>
      </div>
    );
  } else if (averageDailyPrecipitation >= 2.5 && averageDailyPrecipitation < 7.6) {
    precipitationInfo = (
      <div>
        <p>The average daily precipitation of {averageDailyPrecipitation.toFixed(2)} mm is moderate, suitable for many types of crops.Proper soil management and irrigation scheduling can optimize crop yields.Monitor for potential water logging or soil erosion during heavy rainfall events.</p>
	<p>औसत दैनिक वर्षा मध्यम छ, धेरै प्रकारका बालीहरूका लागि उपयुक्त छ। उचित माटो व्यवस्थापन र सिंचाई समयतालिकाले बाली उत्पादनलाई अनुकूलन गर्न सक्छ। भारी वर्षाका घटनाहरूमा सम्भावित पानी जम्ने वा माटोको क्षरणको लागि निगरानी।</p>
      </div>
    );
  } else {
    precipitationInfo = (
      <div>
        <p>The average daily precipitation of {averageDailyPrecipitation.toFixed(2)} mm is high, indicating a humid or wet climate.Drainage systems and flood management measures may be necessary.Monitor for potential fungal diseases and pests that thrive in moist conditions.</p>
	<p>मिलिमिटरको औसत दैनिक वर्षा उच्च छ, आर्द्र वा ओसिलो हावापानीलाई संकेत गर्दछ। जल निकासी प्रणाली र बाढी व्यवस्थापन उपायहरू आवश्यक हुन सक्छ। सम्भावित फंगल रोगहरू र कीटहरू जो ओसिलो अवस्थामा फस्टाउँछन्</p>
      </div>
    );
  }

  return (
    <div className="m-2 mb-8 mx-10">
      {precipitationInfo}
    </div>
  );
};

export default PrecipitationAnalysis;