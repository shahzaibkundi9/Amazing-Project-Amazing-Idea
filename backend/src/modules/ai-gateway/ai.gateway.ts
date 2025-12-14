// Roman Urdu Comment: AI microservice ko request forward karta hai

import { http } from "../../utils/http";

export const AIGateway = {
  sendToAI: async (payload: any) => {
    const response = await http.post("http://ai:7000/api/ai/ask", payload);

    return response.data;
  },
};
