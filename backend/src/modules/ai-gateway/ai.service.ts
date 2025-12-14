// Roman Urdu Comment: Pure AI request ka business logic yahan handle hota hai

import { AIGateway } from "./ai.gateway";
import { ChatService } from "../chats/chat.service";

export const AIService = {
  processMessage: async (userId: string, message: string, history: any, metadata: any) => {
    // Roman Urdu: Pehle user ka message chat DB me save karo
    await ChatService.createMessage(userId, {
      message,
      type: "text",
      sender: "user",
    });

    // Roman Urdu: Ab AI ko request bhejna
    const aiResponse = await AIGateway.sendToAI({
      userId,
      message,
      history,
      metadata,
    });

    // Roman Urdu: AI ka reply bhi chat DB me save karo
    const saved = await ChatService.createMessage(userId, {
      message: aiResponse.reply,
      type: "text",
      sender: "bot",
    });

    return saved;
  },
};
