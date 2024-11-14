import { toaster } from "@/components/ui/toaster";

class Directory {
  constructor(public name?: string, public location?: string, public id?: number) {
    this.name = name;
    this.location = location;
    this.id = id;
  }

  public Cut(type?: string) {
    try {
      toaster.create({
        description: `Cut ${type === "dir" ? "directory" : type === "file" ? "file" : ""}`,
        type: "success",
      });
    } catch (err) {
      toaster.create({
        title: "Error",
        description: ` Cut filed : `,
        type: "error",
      });
      return err;
    }
  }

  public Copy(type?: string) {
    try {
      toaster.create({
        description: `Copy ${type === "dir" ? "directory" : type === "file" ? "file" : ""}`,
        type: "success",
      });
    } catch (err) {
      toaster.create({
        title: "Error",
        description: ` Copy filed :`,
        type: "error",
      });
      return err;
    }
  }

  public Rename(type?: string) {
    try {
      toaster.create({
        description: `Copy ${type === "dir" ? "directory" : type === "file" ? "file" : ""}`,
        type: "success",
      });
    } catch (err) {
      toaster.create({
        title: "Error",
        description: ` Cut filed :  `,
        type: "error",
      });
      return err;
    }
  }

  public Delete(type?: string) {
    try {
      toaster.create({
        description: `Copy ${type === "dir" ? "directory" : type === "file" ? "file" : ""}`,
        type: "success",
      });
    } catch (err) {
      toaster.create({
        title: "Error",
        description: ` Cut filed :  `,
        type: "error",
      });
      return err;
    }
  }
}

export default Directory;