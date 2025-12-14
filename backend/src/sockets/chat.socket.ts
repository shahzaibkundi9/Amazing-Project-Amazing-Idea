// Roman Urdu Comment: Real-time chat events

import { io } from "./index";

io.on("connection", (socket) => {
  console.log("🔗 Admin connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Admin disconnected:", socket.id);
  });
});
