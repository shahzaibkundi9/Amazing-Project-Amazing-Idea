// Roman Urdu Comment: Pure chat workflow logic

import { ChatRepository } from "./chat.repository";
import { io } from "../../sockets";

export const ChatService = {
  createMessage: async (userId: string, data: any) => {
    const chatMessage = await ChatRepository.create(userId, data);

    // Roman Urdu: Admin panel ko real-time message bhejna
    io.emit("chat:new", chatMessage);

    return chatMessage;
  },

  getUserChats: async (userId: string) => {
    return ChatRepository.getChatsForUser(userId);
  },

  getOrderChats: async (orderId: string) => {
    return ChatRepository.getChatsForOrder(orderId);
  },

  getAllChats: async () => {
    return ChatRepository.getAllChats();
  },
};
