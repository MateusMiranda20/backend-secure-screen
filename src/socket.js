import { io } from 'socket.io-client';

export const socket = io('http://localhost:3001'); // ajuste a URL se seu backend estiver em outro lugar
