export const CropCard = ({label, image}: { label:string, image:string}) => {
	return(
		<div>	
			<div className="max-w-64 bg-white border border-gray-200 rounded-lg shadow">
				<a href="#">
					<img src={image} alt={label} />
				</a>
				<div className="p-5 text-center">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{label}</h5>
					</a>
				</div>
			</div>

		</div>
	)
}