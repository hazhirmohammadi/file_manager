import WebSocket, { WebSocketServer } from "ws";
import WebSocketManager from "./core/WebSocketManager";
import FileOS from "./core/FileOS";
type FileInfo = {
  name: string;            // نام فایل یا دایرکتوری
  type: 'file' | 'directory';  // نوع: فایل یا دایرکتوری
  size?: number;           // اندازه فایل (اختیاری برای دایرکتوری‌ها)
  lastModified?: string;   // تاریخ آخرین ویرایش یا ایجاد
  fullPath: string;        // مسیر کامل فایل یا دایرکتوری
};


const PORT = 8080;
 new WebSocketManager(PORT);

(() => {
  const scanner = new FileOS();
  const rootPath = "/home/perla";

  try {
    const allFilesAndDirs = scanner.scan(rootPath);
    console.log("لیست فایل‌ها و پوشه‌ها:");
    console.log(allFilesAndDirs);
  } catch (error) {
    console.log("error in scanning",error);
  }
})()



// const wss = new WebSocketServer({ port: 8080 });
//
// wss.on('connection', (ws: WebSocket) => {
//   console.log('Client connected');
//
//   ws.send('Welcome to the WebSocket server!');
//
//
//   ws.on('message', (message: string) => {
//     console.log(`Received message => ${message}`);
//     ws.send(`You sent: ${message}`);
//   });
//
//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });
//   ws.send("message")
// });

// console.log('WebSocket server is running on ws://localhost:8080');
