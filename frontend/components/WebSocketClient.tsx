"use client"
import React, { useState, useEffect } from "react";
import useDirectoryStore from "@/Store/DirectoryStore";

const WebSocketClient = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>("");
  const { setColor } = useDirectoryStore();
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      handleChange("success")
      console.log("WebSocket connected");
      setWs(socket);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      handleChange("error")
      console.log("WebSocket closed");
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(message);
      console.log("Message sent:", message);
    } else {
      console.log("WebSocket is not open yet.");
    }
  };


  const handleChange = (stats:string) => {
    setColor(stats);
  };
  return (
    <div>
      <input
        className="bg-white"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default WebSocketClient;
