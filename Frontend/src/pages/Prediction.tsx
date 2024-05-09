import { useState } from 'react';
import TemperatureChart from '../components/predictionChart/TemperatureChart';
import WindSpeedChart from '../components/predictionChart/WindSpeedChart';
import PrecipitationChart from '../components/predictionChart/PreceptatChart';

export const Prediction = () => {
    // State to track which section to show
    const [activeSection, setActiveSection] = useState('Precipitation');

    return (
        <div>
            <div className='flex flex-row gap-2 justify-center'>
                <button className='flex flex-row gap-2 p-1 px-4 text-lg rounded-md text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300' onClick={() => setActiveSection('Precipitation')}>Precipitation</button>
                <button className='flex flex-row gap-2 p-1 px-4 text-lg rounded-md text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300' onClick={() => setActiveSection('Temperature')}>Temperature</button>
                <button className='flex flex-row gap-2 p-1 px-4 text-lg rounded-md text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300' onClick={() => setActiveSection('WindSpeed')}>Wind Speed</button>
            </div>
            <div>
                {activeSection === 'Precipitation' && <div><PrecipitationChart/></div>}
                {activeSection === 'Temperature' && <div><TemperatureChart/></div>}
                {activeSection === 'WindSpeed' && <div><WindSpeedChart/></div>}
            </div>
        </div>
    );
};

export default Prediction;
