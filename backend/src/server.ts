// Roman Urdu Comment: Yeh file actual HTTP server ko start karti hai.

import { app } from "./app";
import { env } from "./config";
import { logger } from "./utils/logger";

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`🚀 Server chal raha hai on port ${PORT}`);
});
