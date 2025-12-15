import { AIProvider, AIInput } from "./provider.types";
import axios from "axios";

export const CohereProvider: AIProvider = {
  name: "Cohere",

  generate: async (input: AIInput) => {
    const res = await axios.post(
      "https://api.cohere.ai/v1/generate",
      {
        model: "command",
        prompt: input.message,
        max_tokens: 200,
      },
      {
        headers: { Authorization: `Bearer ${process.env.COHERE_API_KEY}` },
      }
    );

    return res.data.generations[0].text;
  },
};
