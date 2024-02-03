import React, { useEffect, useState } from "react";
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import StopCircleIcon from '@mui/icons-material/StopCircle';
const Voicerecoder = ({ onAudioComplete }) => {
  const recorderControls = useAudioRecorder();
  const [stop, setstop] = useState(false)

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.controls = true;
   

    // Emit the event to the parent component
    if (onAudioComplete) {
      onAudioComplete(blob);
    }

    setstop(!true)
  };

  return (
    <div className="flex">
      <AudioRecorder 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        onClick={recorderControls.startRecording}
      />
{stop && 

      <button onClick={recorderControls.stopRecording}><StopCircleIcon/> </button>
}
      </div>
  );
};

export default Voicerecoder;
