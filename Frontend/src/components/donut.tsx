import '../css/DonutStyles.css'
import percentage from '../utils/percentage';

export function Donut ({ value,standard, unit, label }: { value: number, standard: number, unit:string, label:string }) {
	

	const percent = percentage(value,standard);
	return(
		<div className=''>
			<div className="svg-item">
				<svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
					<circle className="donut-hole" cx="20" cy="20" r="9" fill="#fff"></circle>
					<circle className="donut-ring" cx="20" cy="20" r="9" fill="transparent" stroke-width="3.5"></circle>
					<circle className="donut-segment donut-segment-2" cx="20" cy="20" r="9" fill="transparent" stroke-width="3.5" stroke-dasharray="69 31" stroke-dashoffset="25"></circle>
					<g className="donut-text donut-text-1">

						<text y="50%" transform="translate(0, 2)">
							<tspan x="50%" text-anchor="middle" className="donut-percent">{percent}%</tspan>   
						</text>
						<text y="60%" transform="translate(0, 2)">
							<tspan x="50%" text-anchor="middle" className="donut-data">{value} {unit}</tspan>   
						</text>
					</g>
					<g className="donut-text donut-text-2">
						<text y="85%" transform="translate(0, 2)">
							<tspan x="50%" text-anchor="middle" className="donut-label">{label}</tspan>   
						</text>
					</g>
				</svg>
				
			</div>
			
			

			
		</div>
	)
}