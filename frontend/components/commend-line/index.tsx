"use client"
import React, { useEffect, useState } from "react";
import { useWSStore } from "@/Store/WsStore";
import { toaster } from "@/components/ui/toaster";

const CommendLine = () => {
  const [message, setMessage] = useState("");
  const { service } = useWSStore();
  useEffect(() => {
    service.connect(
      () => {
      },
      () => {
      },
      () => {
      },
      () => {
      },
      (event)=>{
        setMessage(`${event}`)
        console.log(event);
      }
    );
    return () => {
      service.closeConnection();
    };
  }, [service]);

  return (
    <div className="w-full h-full border-2 border-gray-200 rounded-md">
      {message}
    </div>
  );
};

export default CommendLine;