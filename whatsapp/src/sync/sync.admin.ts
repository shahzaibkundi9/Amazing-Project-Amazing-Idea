// Roman Urdu: Admin panel ke Socket.io server par live message forward karta hai

import { io } from "socket.io-client";

export const adminSocket = io(process.env.ADMIN_SOCKET_URL || "http://backend:5000");

export const sendToAdmin = (payload: any) => {
  adminSocket.emit("whatsapp:new_message", payload);
};
