
import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'

const CropDemo = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0zIZuoG16KIBxEBXdMahSoEosh2btuMy6X2JbuH3Rw&s"
  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }

  return (
    <Cropper
      image={src}
      crop={crop}
      zoom={zoom}
      aspect={4 / 3}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
    />
  )
}

export default CropDemo;

