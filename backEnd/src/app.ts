import WebSocket, { WebSocketServer } from 'ws';


const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
  console.log('Client connected');

  ws.send('Welcome to the WebSocket server!');


  ws.on('message', (message: string) => {
    console.log(`Received message => ${message}`);
    ws.send(`You sent: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
  ws.send("message")
});

console.log('WebSocket server is running on ws://localhost:8080');
