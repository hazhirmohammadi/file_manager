import WebSocketService from "@/services/WebSocket";

class Directory {
  private ws;

  constructor(public name?: string, public location?: string, public id?: number) {
    this.name = name;
    this.location = location;
    this.id = id;
    this.ws = new WebSocketService("ws://localhost:8080");
    this.ws.connect();
  }

  public Cut(type?: string, toaster?: () => void, location?: string) {
    try {
      const data = {
        action_type: "cut",
        type: type,
        location: location,
      };
      console.log(data);
      this.ws.sendMessage(JSON.stringify(data));
      if (toaster) {

        toaster();
      }
    } catch (err) {

      return err;
    }
  }

  public Copy(type?: string, toaster?: () => void,location?: string) {
    try {
      const data = {
        action_type: "copy",
        type: type,
        location: location,
      };
      this.ws.sendMessage(JSON.stringify(data));
      if (toaster) {
        toaster();
      }
    } catch (err) {

      return err;
    }
  }

  public Rename(type?: string, toaster?: () => void,location?: string) {

    try {
      const data = {
        action_type: "rename",
        type: type,
        location: location,
      };
      this.ws.sendMessage(JSON.stringify(data));
      if (toaster) {
        toaster();
      }
    } catch (err) {

      return err;
    }
  }

  public Delete(type?: string, toaster?: () => void,location?: string) {
    try {
      const data = {
        action_type: "delete",
        type: type,
        location: location,
      };
      this.ws.sendMessage(JSON.stringify(data));
      if (toaster) {
        toaster();
      }
    } catch (err) {

      return err;
    }
  }
}

export default Directory;