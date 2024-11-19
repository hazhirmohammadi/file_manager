import WebSocket from "ws";

class MessageController {
  constructor() {
  }

  public handleFileAction(message: string) {
    console.log("Received file action ", message);
  }

}

export default MessageController;