import { AISelector } from "../src/rotation/selector";

test("AI provider selection returns valid provider", async () => {
  const provider = await AISelector.getProvider();
  expect(provider).toHaveProperty("generate");
});
