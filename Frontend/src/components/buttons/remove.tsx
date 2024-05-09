export const Remove = ({ onClick }: { onClick: () => void }) => {
	return(
		<div>
			<button type="button" className="p-1 px-4 text-lg rounded-md text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300" onClick={onClick}>Remove</button>
		</div>
	)
}
