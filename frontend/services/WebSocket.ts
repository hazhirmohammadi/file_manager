class WebSocketService {
  private ws: WebSocket | null = null;
  private url: string;
  private connectionStatus: number | null = null;


  constructor(url: string) {
    this.url = url;
  }

  public connect(
    onOpen?: () => void,
    onClose?: () => void,
    onError?: (error: Event) => void,
    reconnect?: () => void,
  ): void {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      this.currentStatus(1);
      if (onOpen) onOpen();
    };

    this.ws.onerror = (error) => {
      this.currentStatus(3);
      if (onError) onError(error);
    };

    this.ws.onclose = () => {
      this.currentStatus(3);
      if (onClose) onClose();
    };

    this.ws.onerror = () => {
      if (reconnect) reconnect();
    };

  }

  private currentStatus(status: number) {
    this.connectionStatus = status;
  }

  public sendMessage(message: string): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(message);
      console.log("Message sent:", message);
    } else {
      this.reconnect();
      console.log("WebSocket is not open yet.");
    }
  }

  public closeConnection(): void {
    if (this.ws) {
      this.ws.close();
      console.log("WebSocket connection closed by client");
    }
  }

  public reconnect() {
    if (this.connectionStatus === WebSocket.CLOSED) {
      this.connect();
      return { status: 3 };
    } else {
      return { status: WebSocket.OPEN };
    }
  }
}

export default WebSocketService;