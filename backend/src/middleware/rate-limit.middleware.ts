// Roman Urdu Comment: API ko spam se protect karta hai

import rateLimit from "express-rate-limit";

export default rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // per minute
  message: "Too many requests, please try again later.",
});
