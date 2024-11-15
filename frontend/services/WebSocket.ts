class WebSocketService {
  private ws: WebSocket | null = null;
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public connect(
    onOpen?: () => void,
    onClose?: () => void,
    onError?: (error: Event) => void,
  ): void {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      if (onOpen) onOpen();
    };

    this.ws.onerror = (error) => {
      if (onError) onError(error);
    };

    this.ws.onclose = () => {
      if (onClose) onClose();
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