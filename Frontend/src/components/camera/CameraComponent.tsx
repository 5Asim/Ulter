import { useRef, useState, useEffect } from 'react';

const CameraComponent = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [image, setImage] = useState<string>('');
    const [showCamera, setShowCamera] = useState<boolean>(false);

    useEffect(() => {
        setShowCamera(true);
    }, []);

    const startCamera = async () => {
        try {
            const constraints = {
                video: {
                    width: { ideal: 1280 }, // You can specify 'ideal' for better device compatibility
                    height: { ideal: 720 },
                    facingMode: "environment" // This should select the back camera on most devices
                }
            };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            if (videoRef.current) videoRef.current.srcObject = stream;
        } catch (error) {
            console.error('Error accessing the camera:', error);
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

    if (!showCamera) {
        return null;
    }

    return (
        <div>
            <video ref={videoRef} autoPlay playsInline style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}></video>
            <button onClick={startCamera}>Start Camera</button>
            <button onClick={takePicture}>Take Picture</button>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            {image && <img src={image} alt="Captured" style={{ display: 'block', marginTop: '10px' }} />}
        </div>
    );
};

export default CameraComponent;
