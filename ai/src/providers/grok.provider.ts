import { AIProvider, AIInput } from "./provider.types";
import axios from "axios";

export const GrokProvider: AIProvider = {
  name: "Grok",

  generate: async (input: AIInput) => {
    const res = await axios.post(
      "https://api.x.ai/v1/chat/completions",
      {
        model: "grok-beta",
        messages: [{ role: "user", content: input.message }],
      },
      {
        headers: { Authorization: `Bearer ${process.env.GROK_API_KEY}` },
      }
    );

    return res.data.choices[0].message.content;
  },
};
