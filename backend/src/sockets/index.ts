// Roman Urdu Comment: Socket.io server init

import { Server } from "socket.io";

let io: Server;

export const initSocket = (httpServer: any) => {
  io = new Server(httpServer, {
    cors: { origin: "*" },
  });

  console.log("🔥 Socket.io connected");

  return io;
};

export { io };
