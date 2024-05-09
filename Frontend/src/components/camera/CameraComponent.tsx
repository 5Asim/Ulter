import { useRef, useState, useEffect } from 'react';
import { FaCamera, FaTimes } from 'react-icons/fa';
import './cameraComponent.css';

interface CameraComponentProps {
    isActive: boolean;
    onClose: () => void;
    onSubmit: (image: string) => void; // Added to handle image submission
}

const CameraComponent = ({ isActive, onClose, onSubmit }: CameraComponentProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [image, setImage] = useState<string>('');
    const [showDialog, setShowDialog] = useState(false); // Controls the visibility of the dialog

    useEffect(() => {
        if (isActive) {
            startCamera().then(() => {
                if (videoRef.current) {
                    videoRef.current.oncanplay = () => {
                        console.log("Video can play.");
                    };
                }
            });
        } else {
            stopCamera();
        }
    }, [isActive]);
    

    const startCamera = async () => {
        try {
            const constraints = {
                video: {
                    width: { ideal: 1920 },
                    height: { ideal: 1080 },
                    facingMode: "environment"
                }
            };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error('Error accessing the camera:', error);
        }
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
            tracks.forEach(track => track.stop());
        }
    };

    const takePicture = () => {
        if (videoRef.current && canvasRef.current && videoRef.current.readyState >= 4) { // Checking if readyState is HAVE_ENOUGH_DATA
            const context = canvasRef.current.getContext('2d');
            if (context) {
                const { videoWidth, videoHeight } = videoRef.current;
                canvasRef.current.width = videoWidth;
                canvasRef.current.height = videoHeight;
                context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);
                const imageDataUrl = canvasRef.current.toDataURL('image/png');
                setImage(imageDataUrl);
                stopCamera();
                setShowDialog(true);
            } else {
                console.error("Failed to get canvas context.");
            }
        } else {
            console.error("Video or canvas ref is not available, or video not ready.");
        }
    };
    
    

    const handleRetry = () => {
        setImage('');
        setShowDialog(false);
        startCamera();
    };

    if (!isActive) return null;

    return (
        <div className="camera-overlay">
            <video ref={videoRef} autoPlay playsInline></video>
            <canvas ref={canvasRef} style={{ display: 'none' }} />  
            {!showDialog && (
                <div className="camera-controls">
                    <button onClick={() => onClose()} className="close-btn">
                        <FaTimes size={24} />
                    </button>
                    <button onClick={takePicture} className="capture-btn">
                        <FaCamera size={24} />
                    </button>
                </div>
            )}
            {showDialog && (
                <div className="image-preview-dialog">
                    <img src={image} alt="Captured" />
                    <button onClick={() => onSubmit(image)}>Submit</button>
                    <button onClick={handleRetry}>Retry</button>
                </div>
            )}
        </div>
    );
};

export default CameraComponent;
