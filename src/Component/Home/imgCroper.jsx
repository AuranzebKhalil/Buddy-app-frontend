import React, { useState } from 'react';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import Cropper from 'react-easy-crop';

const CloudinaryImageCropper = () => {
  const cloudName = 'dcnozrxnz';
  const [selectedImage, setSelectedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleCropComplete = () => {
    // Perform any additional logic before updating the image URL
    // For simplicity, directly set croppedPublicId to a new value
    setCroppedPublicId('new-cropped-image-public-id');
  };

  return (
    <div style={{ position: 'relative' }}>
      <div>
        <input type="file" onChange={handleFileChange} />
      </div>
      {selectedImage && (
        <div>
          <CloudinaryContext cloudName={cloudName}>
            <Cropper
              image={selectedImage}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              style={{ maxWidth: '100%', maxHeight: '400px' }} // Example inline styles for Cropper
            />
          </CloudinaryContext>
        </div>
      )}
      {/* Add your cropper component with an `onCropComplete` callback */}
      <div>
        {/* Replace this with your actual cropper component */}
        <button onClick={handleCropComplete}>Crop Image</button>
      </div>
    </div>
  );
};

export default CloudinaryImageCropper;
