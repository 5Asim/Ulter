import { useRef, useState, useEffect } from 'react';

interface CameraComponentProps {
    isActive: boolean; // Prop to control camera activation
}

const CameraComponent = ({ isActive }: CameraComponentProps) => {
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
                    width: window.screen.width,
                    height: window.screen.height,
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
        <div>
            <video ref={videoRef} autoPlay playsInline style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}></video>
            <button onClick={takePicture}>Take Picture</button>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            {image && <img src={image} alt="Captured" style={{ width: '10px', height: '10px', objectFit: 'cover' }} />}
        </div>
    );
};

export default CameraComponent;
