import WebSocketService from "@/services/WebSocket";

class Directory {
  private ws;

  constructor(public name?: string, public location?: string, public id?: number) {
    this.name = name;
    this.location = location;
    this.id = id;
    this.ws = new WebSocketService("ws://localhost:8080");
    this.ws.connect()
  }

  public Cut(type?: string, toaster?: () => void) {
    try {

      this.ws.sendMessage(`send from service ${type}`)
      if (toaster) {

        toaster();
      }
    } catch (err) {

      return err;
    }
  }

  public Copy(type?: string, toaster?: () => void) {
    try {
      if (toaster) {
        toaster();
      }
    } catch (err) {

      return err;
    }
  }

  public Rename(type?: string, toaster?: () => void) {
    try {
      if (toaster) {
        toaster();
      }
    } catch (err) {

      return err;
    }
  }

  public Delete(type?: string, toaster?: () => void) {
    try {
      if (toaster) {
        toaster();
      }
    } catch (err) {

      return err;
    }
  }
}

export default Directory;