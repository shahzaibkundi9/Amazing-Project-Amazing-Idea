// Roman Urdu: Ye simple async queue future scaling ke liye ready rakhta hai

import { Queue } from "bullmq";

export const taskQueue = new Queue("tasks", {
  connection: {
    host: process.env.REDIS_HOST || "localhost",
    port: Number(process.env.REDIS_PORT) || 6379,
  },
});
