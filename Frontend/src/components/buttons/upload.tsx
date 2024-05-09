import { AiOutlineUpload } from "react-icons/ai";
export const Upload = ({ onClick }: { onClick: () => void }) => {
	return(
		<div>
			<button type="button" className="flex flex-row gap-2 p-1 px-4 text-lg rounded-md text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300" onClick={onClick}>
				<AiOutlineUpload className="text-3xl text-white"/>
				<p>Upload</p>
			</button>
		
		</div>
	)
}
