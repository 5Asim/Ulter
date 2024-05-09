import { Donut } from "../components/donut";

export default function Home() {
	return(
		<div className="">
			<div>
			<Donut value={80} standard={100} unit="C" label="Temperature" />
			
			</div>

		</div>
	)
}