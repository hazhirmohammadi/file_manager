import WebSocket, { WebSocketServer } from "ws";
import MessageController from "../controllers/MessageController";
import FileOS from "./FileOS";


class WebSocketManager {
  private wss: WebSocketServer;
  private controller: MessageController;
  private fileOS: FileOS;

  constructor(port: number) {
    this.wss = new WebSocketServer({ port });
    this.controller = new MessageController();
    this.fileOS = new FileOS();
    this.setup();
  }

  private setup() {
    this.wss.on("connection", (ws: WebSocket) => {
      this.handleConnection(ws);
    });
  }

  private handleConnection(ws: WebSocket) {
    console.log(`Client connected: `);

    // ws.send("welcome to the WebSocket server!");

    const baseFileSystem = this.fileOS.scan("/home/perla");
    ws.send(JSON.stringify(baseFileSystem));
    ws.on("message", (data: WebSocket.RawData) => {
      const message = data.toString("utf-8");
      this.controller.handleFileAction(message);
    });

    ws.on("close", () => {
    });
  }
}

export default WebSocketManager;