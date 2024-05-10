import { useState } from "react";
import { Upload } from "../components/buttons/upload";
import { CropCard } from "../components/cards/CropCard";
import Crop1 from "../assets/crop1.jpeg";

import CameraComponent from "../components/camera/CameraComponent";
import { UploadForm } from "../components/upload/UploadForm";
import { CameraButton } from "../components/buttons/camera";
import Carousel from "../components/carousel/slider";



export default function Health() {
    const [showUploadForm, setShowUploadForm] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    const [given,setGiven] = useState(false);
    const [showCarousel, setShowCarousel] = useState(false);

    const handleUploadClick = () => {
        setShowUploadForm(true);
    };
    const handleCameraClick = () => {
        setShowCamera(true);
    };
    const handleImageSubmit = (image: string) => {
        console.log(image);
        setGiven(true); // Set given to true when image is submitted
        
          setShowCarousel(true); // Show carousel after a delay
// Reduced delay time to 0.5 seconds
    };
    const handleSuccessfulUpload = () => {
        setGiven(true);
        setTimeout(() => {
          setShowUploadForm(false); // Optionally close the upload form
        }, 3000); // Adjust delay to show the carousel
      };

    return(
        <div className="mt-8">
            <div className="flex justify-end gap-4">
                <Upload onClick={handleUploadClick}/>
                <CameraButton onClick={handleCameraClick}/>
                {showCamera && <CameraComponent isActive={showCamera} onClose={() => setShowCamera(false)} onSubmit={handleImageSubmit}/>}
            </div>
            <div>
                {showUploadForm && (
                    <UploadForm isOpen={showUploadForm} closeModal={() => setShowUploadForm(false)} onUploadSuccess={handleSuccessfulUpload}/>
                )}
                <h1 className="m-8 text-2xl font-bold">Crops</h1>
                {given && showCarousel && (
                    console.log("showing"),
                    <Carousel images={[Crop1]} />
                )}

                {/* <div>
                    <CropCard label="Plant" image={Crop1}/>
                </div> */}
            </div>
        </div>
    )
}
