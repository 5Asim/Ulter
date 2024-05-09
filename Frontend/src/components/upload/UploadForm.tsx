import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

export const UploadForm = ({ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void }) => {
  const [error, setError] = useState('');
  const [file, setFile] = useState<{ preview: string; raw: File } | null>(null);

  useEffect(() => {
    // Clean up to revoke the object URL
    return () => {
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.match('image.*')) {
        setError('Please select an image file (jpg, png, gif, svg)');
        return;
      }
      if (file.size > 3200000) { // Restrict file size to 3MB
        setError('File size must be less than 3MB');
        return;
      }
      setError('');
      setFile({
        preview: URL.createObjectURL(file),
        raw: file
      });
    }
  }

  function handleSubmit() {
    // Implement the actual upload logic here
    console.log('Submitting file:', file);
    alert('File submitted!'); // Placeholder alert
    closeModal();
  }
  


  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Upload Image Form"
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
      }}
    >

    <div className="flex items-center justify-center w-full ">
      {!file && (
        <label htmlFor="dropzone-file" className="m-20">
          <div className="flex flex-col items-center justify-center pt-5 pb-6 cursor-pointer">
            <svg className="w-8 h-8 mb-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
            <p className='mb-2 text-base text-gray-500'>Upload Your Image here</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={handleChange} />
        </label>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {file && (
        <div className='flex flex-col justify-center gap-4'>
          <img src={file.preview} alt="Preview" className="max-h-40 mt-4" />
          <div className='flex flex-row gap-2 justify-center'>
          <button className="p-1 px-4 text-lg rounded-md text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300" onClick={handleSubmit}>Submit</button>
          <button className="p-1 px-4 text-lg rounded-md text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300" onClick={closeModal}>Close</button>
          </div>
          
        </div>
      )}
    </div>
    </ReactModal>
  );
};
