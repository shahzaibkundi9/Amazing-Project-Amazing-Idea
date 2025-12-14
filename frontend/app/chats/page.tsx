"use client";

import { useSocket } from "../../hooks/useSocket";
import { useEffect, useState } from "react";

export default function ChatsPage() {
  const socket = useSocket();
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    if (!socket) return;

    socket.on("whatsapp:new_message", (msg: any) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, [socket]);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Live WhatsApp Chats</h1>

      <div className="bg-white p-4 rounded shadow-md h-[600px] overflow-y-scroll">
        {messages.map((m, i) => (
          <div key={i} className="mb-2">
            <span className="font-bold">{m.sender}: </span>
            <span>{m.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
