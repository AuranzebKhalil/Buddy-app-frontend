import React, { useState, useRef, useEffect } from "react";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import ImageIcon from "@mui/icons-material/Image";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import Emoji from "./emoji";
import Image from "next/image";
import InputEmoji from "react-input-emoji";
import Voicerecoder from "./Voicerecoder";
import { useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/Firebase/firebase";
import { useSendMessageMutation } from "@/Store/Services/messangers";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("dasdasdasd");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [emojis, setEmojis] = useState(false);
  const [isClient, setIsClient] = useState(true);
  const [audio, setaudio] = useState(false);
  const [userAudio, setuserAudio] = useState();
  const messangerSender = useSelector((state) => state.messanger);
  const [text, settext] = useState("");

  const [setMessages] = useSendMessageMutation();
  const currentDate = new Date();
  const currentDateTimeString = currentDate.toLocaleString();
  const storedUser =
  typeof localStorage !== "undefined"
    ? JSON.parse(localStorage?.getItem("User"))
    : null;
  const [usermessage, setUserMessage] = useState({
    date: currentDateTimeString,
    messageText: "",
    messageImg: "",
    messageAudio: null,
    messageId: storedUser?.id,
    userName:"",
    senderName: storedUser?.username,
    senderId: "",
    current: "",
  });


  const openAudio = () => {
    setaudio(!audio);
  };

  useEffect(() => {
 
    setUserMessage((prevUserMessage) => ({
      ...prevUserMessage,
      userName: messangerSender.value.userName,
      senderId: messangerSender.value.requestId,
      current: messangerSender.value.currentUserId,
    }));
  }, [messangerSender]);

  const fileInputRef = useRef(null);

  const handleImageIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const clicks = () =>{
console.log(messangerSender, messangerSender)
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file.name);

    const storageRef = ref(storage, "postImg/" + file.name);
    await uploadBytes(storageRef, file);
    const imageURL = await getDownloadURL(storageRef);
    console.log(imageURL, "imageURL");

    setUserMessage((prevUserMessage) => ({
      ...prevUserMessage,
      messageImg: imageURL,
    }));
  };

  const handleChange = (value) => {
    setUserMessage((prevUserMessage) => ({
      ...prevUserMessage,
      messageText: value,
    }));
  };

  const handleAudioComplete = async (audioBlob) => {
    console.log("Audio recording complete:", audioBlob.type);
    const storageRef = ref(storage, "audio/" + audioBlob.type);
    await uploadBytes(storageRef, audioBlob);
    const audioUrl = await getDownloadURL(storageRef);

    setUserMessage((prevUserMessage) => ({
      ...prevUserMessage,
      messageAudio: audioUrl,
    }));
  };
  
    const handleSendMessage = async () => {
    console.log(messangerSender.value, ' messangerSender.value.requestId')
    try {
      console.log(usermessage);
      const res = await setMessages(usermessage);
      console.log(res);
      onSendMessage()
    } catch (error) {
      console.error("Error while sending the message:", error);
    }
  };


  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>

      <button onClick={() => clicks()}>clcikas</button>
      <InputEmoji
        cleanOnEnter
        onChange={handleChange}
        placeholder="Type a message"
      />

      <div style={{ display: "flex" }}>
        <Voicerecoder onAudioComplete={handleAudioComplete} />

        <IconButton
          variant="text"
          className="rounded-full"
          onClick={handleImageIconClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </IconButton>

        <IconButton>
          <VideoCallIcon />
        </IconButton>
        <Button
          variant=""
          color="primary"
          endIcon={<SendIcon />}
          onClick={() => handleSendMessage()}
        >
          Send
        </Button>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ChatInput;
