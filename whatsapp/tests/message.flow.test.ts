import { handleIncomingMessage } from "../src/handlers/message.handler";
import { MockSocket } from "./mock.sock";

test("WhatsApp should process incoming text", async () => {
  const msg = {
    key: { remoteJid: "user123" },
    message: { conversation: "Hello bot" },
  };

  const res = await handleIncomingMessage(MockSocket as any, msg);
  expect(res).not.toBeNull();
});
