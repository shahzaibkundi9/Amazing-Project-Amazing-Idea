import axios from "axios";
import { ClaudeProvider } from "../providers/claude.provider";
import { GeminiProvider } from "../providers/gemini.provider";
import { CohereProvider } from "../providers/cohere.provider";
import { GrokProvider } from "../providers/grok.provider";

export const AISelector = {
  getProvider: async () => {
    const res = await axios.get(process.env.BACKEND_URL + "/api/ai/providers");
    const enabled = res.data.data.filter((p: any) => p.enabled);

    enabled.sort((a: any, b: any) => a.priority - b.priority);

    const pick = enabled[0]?.name;

    switch (pick) {
      case "Claude": return ClaudeProvider;
      case "Gemini": return GeminiProvider;
      case "Cohere": return CohereProvider;
      case "Grok": return GrokProvider;
      default: return ClaudeProvider;
    }
  },
};
