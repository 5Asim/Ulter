import { useRef, useState, useEffect } from 'react';
import { isMobileDevice } from '../../utils/helpers'; 

const CameraComponent = () => {
    // Specify the type of elements these refs will hold
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [image, setImage] = useState<string>(''); // Explicitly type the state as well
    const [showCamera, setShowCamera] = useState<boolean>(false);

    useEffect(() => {
        setShowCamera(isMobileDevice());
    }, []);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });
            if (videoRef.current) videoRef.current.srcObject = stream;
        } catch (error) {
            console.error('Error accessing the camera:', error);
        }
    };

    const takePicture = () => {
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) { // Always good to check for nullability
                const { videoWidth, videoHeight } = videoRef.current;

                canvasRef.current.width = videoWidth;
                canvasRef.current.height = videoHeight;

                context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);

                const imageDataUrl = canvasRef.current.toDataURL('image/png');
                setImage(imageDataUrl);
            }
        }
    };

    if (!showCamera) {
        return null;
    }

    return (
        <div>
            <video ref={videoRef} autoPlay playsInline style={{ width: '100%' }}></video>
            <button onClick={startCamera}>Start Camera</button>
            <button onClick={takePicture}>Take Picture</button>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            {image && <img src={image} alt="Captured" style={{ display: 'block', marginTop: '10px' }} />}
        </div>
    );
};

export default CameraComponent;
