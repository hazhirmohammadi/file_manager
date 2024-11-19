import fs from "fs";
import path from "path";

type FileInfo = {
  name: string;
  type: "file" | "directory";
  size?: number;
  lastModified?: string;
  fullPath: string;
};

class FileOS {

  private fileList: FileInfo[] = [];

  constructor() {
  }

  private isValidPath(filePath: string): boolean {
    const systemPaths = ["/boot", "/etc", "/proc", "/sys", "/dev"];
    return !systemPaths.some(systemPath => filePath.startsWith(systemPath));
  }

  private readDirectoryResolver(ditPath: string) {
    try {
      const entries = fs.readdirSync(ditPath, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(ditPath, entry.name);
        const statsfs = fs.statSync(fullPath);
        const fileInfo: FileInfo = {
          name: entry.name,
          type: entry.isDirectory() ? "directory" : "file",
          size: entry.isFile() ? statsfs.size : undefined,
          lastModified: statsfs.mtime.toString(),
          fullPath: fullPath,
        };

        if (this.isValidPath(fullPath)) {
          this.fileList.push(fileInfo);
          if (entry.isDirectory()) {
            this.fileList.push(fileInfo);
          }
        }
      }
    } catch (error: any) {
      if (error.code === "ENOENT") {
        console.warn(`Access denied to directory: ${error}`);
      } else {
        console.error(error.message);
      }
    }
  }


  public scan(rootPath: string): FileInfo[] {
    this.fileList = [];
    this.readDirectoryResolver(rootPath);
    return this.fileList;
  }
}

export default FileOS;