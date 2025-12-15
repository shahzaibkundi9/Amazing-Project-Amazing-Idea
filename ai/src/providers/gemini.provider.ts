import { AIInput, AIProvider } from "./provider.types";
import axios from "axios";

export const GeminiProvider: AIProvider = {
  name: "Gemini",

  generate: async (input: AIInput) => {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: input.message }] }],
      }
    );

    return res.data.candidates[0].content.parts[0].text;
  },
};
