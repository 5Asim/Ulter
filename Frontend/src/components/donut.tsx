import '../css/DonutStyles.css';
import percentage from '../utils/percentage';

export function Donut({ value, standard, unit, label, label2 }: { value: number, standard: number, unit: string, label: string , label2:string}) {
    const percent = percentage(value, standard);
    const radius = 9;
    const circumference = 2 * Math.PI * radius;
    const dashFilled = (circumference * percent) / 100;
    const dashUnfilled = circumference - dashFilled;
    const dashArray = `${dashFilled} ${dashUnfilled}`;
    const dashOffset = circumference / 4;  // Start from top of the circle

    return (
        <div className="donut-container">
            <div className="svg-item">
                <svg width="400px" height="400px" viewBox="0 0 40 40" className="donut">
                    <circle className="donut-hole" cx="20" cy="20" r="9" fill="#fff"></circle>
                    <circle className="donut-ring" cx="20" cy="20" r="9" fill="transparent" strokeWidth="3.5"></circle>
                    <circle className="donut-segment-2" cx="20" cy="20" r="9" fill="transparent" strokeWidth="3.5"
                        strokeDasharray={dashArray} strokeDashoffset={dashOffset}></circle>
                    <g className="donut-text donut-text-1">
                        <text y="50%" transform="translate(0, 2)">
                            <tspan x="50%" textAnchor="middle" className="donut-percent">{percent.toFixed(2)}%</tspan>
                        </text>
                        <text y="60%" transform="translate(0, 2)">
                            <tspan x="50%" textAnchor="middle" className="donut-data">{value.toFixed(2)} {unit}</tspan>
                        </text>
                    </g>
                    <g className="donut-text donut-text-2">
                        <text y="85%" transform="translate(0, 2)">
				
                            <tspan x="50%" textAnchor="middle" className="donut-label">{label}</tspan>
			
                        </text>
			<text y="95%" transform="translate(0, 2)">
				
                            
			<tspan x="50%" textAnchor="middle" className="donut-label">{label2}</tspan>
                        </text>
                    </g>
                </svg>
            </div>
        </div>
    );
}
