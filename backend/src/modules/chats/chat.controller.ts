// Roman Urdu Comment: HTTP controllers for chat

import { Request, Response } from "express";
import { ChatService } from "./chat.service";

export const ChatController = {
  create: async (req: any, res: Response) => {
    const message = await ChatService.createMessage(req.user.id, req.body);

    return res.json({
      success: true,
      message: "Chat saved",
      data: message,
    });
  },

  userChats: async (req: any, res: Response) => {
    const chats = await ChatService.getUserChats(req.user.id);

    return res.json({
      success: true,
      data: chats,
    });
  },

  orderChats: async (req: Request, res: Response) => {
    const { orderId } = req.params;
    const chats = await ChatService.getOrderChats(orderId);

    return res.json({
      success: true,
      data: chats,
    });
  },

  allChats: async (req: Request, res: Response) => {
    const chats = await ChatService.getAllChats();

    return res.json({
      success: true,
      data: chats,
    });
  },
};
