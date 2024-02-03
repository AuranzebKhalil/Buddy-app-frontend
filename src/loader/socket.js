
// Chat.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const socket = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/messager/getmessage/");
    socket.onopen = () => {
      console.log("WebSocket connection established.");
    };
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    socket.onclose = () => {
      console.log("WebSocket connection closed.");
    };
    return () => {
      socket.close();
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    const message = {
      content: inputValue,
    };
    try {
      await axios.get("http://localhost:8000/messager/getmessage/");
      setInputValue("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        {messages.map((message) => (
          <p key={message.id}>{message}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          style={{border:'1px solid black'}}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default socket;