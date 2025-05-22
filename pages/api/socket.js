// pages/api/socket.js
import { Server } from "socket.io";

export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log('Socket is already running');
    res.end();
    return;
  }
  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on('connection', socket => {
    console.log('New client connected');

    // Emit data to the client
    setInterval(() => {
      socket.emit('update-data', { /* Tu lógica para enviar datos de la DB */ });
    }, 1000);

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  console.log('Setting up socket');
  res.end();
}
