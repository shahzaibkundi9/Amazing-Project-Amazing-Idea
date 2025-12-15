// Roman Urdu: User ke AI conversation history ko manage karta hai

const memory: any = {};

export const ContextManager = {
  load: (userId: string) => memory[userId] || [],

  update: (userId: string, userMessage: string, aiMessage: string) => {
    if (!memory[userId]) memory[userId] = [];
    memory[userId].push({
      user: userMessage,
      ai: aiMessage,
      time: Date.now(),
    });
  },
};
