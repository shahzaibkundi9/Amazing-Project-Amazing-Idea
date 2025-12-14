// Roman Urdu Comment: Yeh main router hai, Phase 2 mein modules add honge.

import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Backend API Running ✔");
});

export default router;
