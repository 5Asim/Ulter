import { useState } from "react";
import { Upload } from "../components/buttons/upload";
import { CropCard } from "../components/cards/CropCard";
import Crop1 from "../assets/crop1.jpeg";
import CameraComponent from "../components/camera/CameraComponent";
import { UploadForm } from "../components/upload/UploadForm";
import { CameraButton } from "../components/buttons/camera";

export default function Health() {
    const [showUploadForm, setShowUploadForm] = useState(false);
    const [showCamera, setShowCamera] = useState(false);

    const handleUploadClick = () => {
        setShowUploadForm(true);
    };
    const handleCameraClick = () => {
        setShowCamera(true);
    };


    return(
        <div className="mt-8">
            <div className="flex justify-end gap-4">
                <Upload onClick={handleUploadClick}/>
                <CameraButton onClick={handleCameraClick}/>
                {showCamera && <CameraComponent isActive={showCamera} onClose={() => setShowCamera(false)} />}
            </div>
            <div>
		{showUploadForm && <UploadForm/>}
                <h1 className="m-8 text-2xl font-bold">Crops</h1>
                <div>
                    <CropCard label="Plant" image={Crop1}/>
                </div>
                
            </div>
        </div>
    )
}
