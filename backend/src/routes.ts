// Roman Urdu Comment: Yeh main router hai, Phase 2 mein modules add honge.


import { Router } from "express";
import authRoutes from "./modules/auth/auth.route";
import userRoutes from "./modules/users/user.route";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

router.get("/", (req, res) => {
  res.send("Backend API Running ✔");
});

export default router;
