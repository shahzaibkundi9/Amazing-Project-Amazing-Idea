// Roman Urdu: Yeh hook socket se live messages fetch karta hai aur UI filters apply karta hai

"use client";

import { useState, useEffect } from "react";
import { useSocket } from "./useSocket";
import { formatMessage } from "../lib/chatFormatter";

export const useChat = () => {
  const socket = useSocket();

  const [messages, setMessages] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [activeUser, setActiveUser] = useState<string | null>(null);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // RECEIVE MESSAGE
  useEffect(() => {
    if (!socket) return;

    socket.on("whatsapp:new_message", (msg: any) => {
      const formatted = formatMessage(msg);
      setMessages((prev) => [...prev, formatted]);

      // Add new sender automatically to sidebar
      if (!users.includes(formatted.jid)) {
        setUsers((prev: any) => [...prev, formatted.jid]);
      }
    });

    return () => socket.off("whatsapp:new_message");
  }, [socket]);

  // FILTER LOGIC
  const filteredMessages = messages.filter((m) => {
    const matchUser = activeUser ? m.jid === activeUser : true;
    const matchFilter =
      filter === "all" ? true : m.sender === filter;
    const matchSearch = search
      ? m.message.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchUser && matchFilter && matchSearch;
  });

  return {
    messages,
    filteredMessages,
    users,
    activeUser,
    setActiveUser,
    filter,
    setFilter,
    search,
    setSearch,
  };
};
