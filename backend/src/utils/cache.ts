// Roman Urdu: Future ke liye Redis cache integration helper

import Redis from "ioredis";

export const cache = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT) || 6379,
});

export const setCache = async (key: string, value: any, ttl = 60) => {
  await cache.set(key, JSON.stringify(value), "EX", ttl);
};

export const getCache = async (key: string) => {
  const data = await cache.get(key);
  return data ? JSON.parse(data) : null;
};
