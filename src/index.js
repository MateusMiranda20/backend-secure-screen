// backend/index.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // ajuste para o seu frontend
    methods: ["GET", "POST"],
  },
});

let currentUserId = null;

io.on('connection', (socket) => {
  console.log(`Usuário conectado: ${socket.id}`);

  socket.on('request_access', () => {
    if (!currentUserId) {
      currentUserId = socket.id;
      socket.emit('access_granted');
      console.log(`Acesso concedido: ${socket.id}`);
    } else {
      socket.emit('access_denied');
      console.log(`Acesso negado para: ${socket.id}`);
    }
  });

  socket.on('release_access', () => {
    if (socket.id === currentUserId) {
      console.log(`Acesso liberado: ${socket.id}`);
      currentUserId = null;
    }
  });

  socket.on('disconnect', () => {
    if (socket.id === currentUserId) {
      console.log(`Usuário desconectado e acesso liberado: ${socket.id}`);
      currentUserId = null;
    }
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});