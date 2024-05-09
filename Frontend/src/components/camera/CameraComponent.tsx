import { useRef, useState, useEffect } from 'react';
import { FaCamera, FaTimes } from 'react-icons/fa';
import './cameraComponent.css'

interface CameraComponentProps {
    isActive: boolean; // Prop to control camera activation
    onClose: () => void;
}

const CameraComponent = ({ isActive, onClose }: CameraComponentProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [image, setImage] = useState<string>('');

    useEffect(() => {
        if (isActive) {
            startCamera();
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
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                const { videoWidth, videoHeight } = videoRef.current;
                canvasRef.current.width = videoWidth;
                canvasRef.current.height = videoHeight;
                context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);
                const imageDataUrl = canvasRef.current.toDataURL('image/png');
                setImage(imageDataUrl);
            }
        }
    };

    return (
        <div className="camera-overlay">
            { image && (
                <div className="image-preview">
                    <img src={image} alt="Captured" />
                </div>
            )}
            <video ref={videoRef} autoPlay playsInline></video>
            <div className="camera-controls">
                <button onClick={() => onClose()} className="close-btn">
                    <FaTimes size={24} />
                </button>
                <button onClick={takePicture} className="capture-btn"> {/* Update this to handle capture */}
                    <FaCamera size={24} />
                </button>
            </div>
           
        </div>
    );
};

export default CameraComponent;
