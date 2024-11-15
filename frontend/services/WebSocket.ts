class WebSocketService {
  private ws: WebSocket | null = null;
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public connect(
    onOpen: () => void,
    onClose: () => void,
    onError: (error: Event) => void,
  ): void {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      // console.log("WebSocket connected");
      onOpen();
    };

    this.ws.onerror = (error) => {
      // console.error("WebSocket error:", error);
      onError(error);
    };

    this.ws.onclose = () => {
      console.log("WebSocket closed");
      onClose();
    };
  }

  public sendMessage(message: string): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(message);
      console.log("Message sent:", message);
    } else {
      console.log("WebSocket is not open yet.");
    }
  }

  public closeConnection(): void {
    if (this.ws) {
      this.ws.close();
      console.log("WebSocket connection closed by client");
    }
  }
}

export default WebSocketService;