"use client";

import ChatMessage from "./chatMessage";

export default function ChatWindow({ messages, filter, setFilter, activeUser }: any) {
  if (!activeUser)
    return <div className="flex-1 flex items-center justify-center text-gray-500">Select a user</div>;

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="flex items-center gap-2 p-3 border-b bg-white">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded ${filter === "all" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("user")}
          className={`px-3 py-1 rounded ${filter === "user" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          User
        </button>
        <button
          onClick={() => setFilter("bot")}
          className={`px-3 py-1 rounded ${filter === "bot" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          Bot
        </button>
        <button
          onClick={() => setFilter("image")}
          className={`px-3 py-1 rounded ${filter === "image" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          Media
        </button>
      </div>

      <div className="flex-1 overflow-y-scroll p-4 space-y-2">
        {messages.map((m: any, i: number) => (
          <ChatMessage key={i} msg={m} />
        ))}
      </div>
    </div>
  );
}
