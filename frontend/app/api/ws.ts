import { NextApiRequest, NextApiResponse } from 'next';
import WebSocket from 'ws';


interface NextApiRequestWithSocket extends NextApiRequest {
  socket: {
    server: any;
  };
}

const WebSocketHandler = (req: NextApiRequestWithSocket, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const wsServer = new WebSocket.Server({ noServer: true });


    wsServer.on('connection', (ws) => {
      console.log('Client connected');
      ws.on('message', (message: string) => {
        console.log(`Received message: ${message}`);
        ws.send(`Echo: ${message}`);
      });

      ws.on('close', () => {
        console.log('Client disconnected');
      });
    });


    req.socket.server.on('upgrade', (request, socket, head) => {
      wsServer.handleUpgrade(request, socket, head, (ws) => {
        wsServer.emit('connection', ws, request);
      });
    });

    res.status(200).json({ message: 'WebSocket server running' });
  } else   {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default WebSocketHandler;
