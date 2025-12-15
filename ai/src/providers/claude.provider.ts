import { AIInput, AIProvider } from "./provider.types";
import axios from "axios";

export const ClaudeProvider: AIProvider = {
  name: "Claude",

  generate: async (input: AIInput) => {
    const res = await axios.post("https://api.anthropic.com/v1/messages", {
      model: "claude-3-haiku-20240307",
      messages: [{ role: "user", content: input.message }],
      max_tokens: 300,
    }, {
      headers: { "x-api-key": process.env.CLAUDE_API_KEY! }
    });

    return res.data.content[0].text;
  },
};
