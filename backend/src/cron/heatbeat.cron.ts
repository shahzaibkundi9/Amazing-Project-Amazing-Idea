import cron from "node-cron";
import { prisma } from "../prisma/client";
import axios from "axios";

cron.schedule("*/1 * * * *", async () => {
  try {
    await prisma.heartbeat.create({
      data: {
        service: "backend",
      },
    });

    await axios.get(process.env.AI_URL + "/api/ai/health");
    await prisma.heartbeat.create({
      data: { service: "ai" },
    });
  } catch (err) {
    console.log("Heartbeat Error:", err);
  }
});
