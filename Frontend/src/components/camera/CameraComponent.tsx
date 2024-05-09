import { useRef, useState, useEffect } from 'react';
import { FaCamera, FaTimes, FaVideo, FaStop } from 'react-icons/fa';
import './cameraComponent.css';

interface CameraComponentProps {
    isActive: boolean;
    onClose: () => void;
    onSubmit: (media: string, type: 'image' | 'video') => void;
}

const CameraComponent = ({ isActive, onClose, onSubmit }: CameraComponentProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [media, setMedia] = useState<string>('');
    const [showDialog, setShowDialog] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

    useEffect(() => {
        if (isActive) {
            startCamera().catch(console.error);
        } else {
            stopCamera();
        }
    }, [isActive]);

    const startCamera = async () => {
        const constraints = {
            video: {
                width: { ideal: 1920 },
                height: { ideal: 1080 },
                facingMode: "environment"
            }
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current!.srcObject = stream;
        setMediaRecorder(new MediaRecorder(stream));
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
            tracks.forEach(track => track.stop());
        }
        setIsRecording(false);
    };

    const takePicture = () => {
        if (videoRef.current && canvasRef.current && videoRef.current.readyState >= 4) {
            const context = canvasRef.current.getContext('2d');
            const { videoWidth, videoHeight } = videoRef.current;
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;
            context!.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);
            const imageDataUrl = canvasRef.current.toDataURL('image/png');
            setMedia(imageDataUrl);
            setShowDialog(true);
        }
    };

    const startRecording = () => {
        if (mediaRecorder && mediaRecorder.state === 'inactive') {
            mediaRecorder.start();
            setIsRecording(true);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
            mediaRecorder.ondataavailable = (e) => {
                const videoUrl = URL.createObjectURL(e.data);
                setMedia(videoUrl);
                setShowDialog(true);
            };
            setIsRecording(false);
        }
    };

    const handleRetry = () => {
        setMedia('');
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
                    {isRecording ? (
                        <button onClick={stopRecording} className="record-btn">
                            <FaStop size={24} />
                        </button>
                    ) : (
                        <button onClick={startRecording} className="record-btn">
                            <FaVideo size={24} />
                        </button>
                    )}
                </div>
            )}
            {showDialog && (
                <div className="image-preview-dialog">
                    {mediaRecorder && <video src={media} controls autoPlay loop />}
                    {!mediaRecorder && <img src={media} alt="Captured" />}
                    <button onClick={() => onSubmit(media, mediaRecorder ? 'video' : 'image')}>Submit</button>
                    <button onClick={handleRetry}>Retry</button>
                </div>
            )}
        </div>
    );
};

export default CameraComponent;
