
// Roman Urdu: Admin panel ke liye live chat stream events

import { io } from "./index";

io.on("connection", (socket) => {
  console.log("🔗 Admin Panel Connected:", socket.id);

  // Roman Urdu: live messages admin ko receive karwane ke liye
  socket.on("admin:send_message", (data) => {
    io.emit("chat:new", data);
  });

  socket.on("disconnect", () => {
    console.log("❌ Admin Panel Disconnected:", socket.id);
  });
});
