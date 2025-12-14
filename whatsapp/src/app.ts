// Roman Urdu Comment: WhatsApp service ka main entrypoint

import { initClient } from "./client";
import { loadSession } from "./session/session.loader";
import { logger } from "./utils/humanizer";

async function bootstrap() {
  logger("🚀 WhatsApp Service Booting...");

  const session = await loadSession();

  await initClient(session);

  logger("🔥 WhatsApp Client Ready!");
}

bootstrap();
