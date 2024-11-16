import WebSocketService from "@/services/WebSocket";
import { create } from "zustand";

type WebSocketStore = {
  service: WebSocketService;
  sendMessage: (message: string) => void;
  closeConnection?: () => void;
  reconnect: () => unknown;
};

export const useWSStore = create<WebSocketStore>((set) => {
  const service = new WebSocketService("ws://localhost:8080");
  service.connect(
    () => console.log("Connected to WS server"),
    () => console.log("WebSocket disconnected"),
    (error) => console.error("WebSocket error:", error),
  );
  return {
    service,
    sendMessage: (message) => service.sendMessage(message),
    closeConnection: () => service.closeConnection(),
    reconnect: () => service.reconnect(),
  };
});