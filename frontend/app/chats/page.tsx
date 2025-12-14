
"use client";

import { useChat } from "../../hooks/useChat";
import ChatSidebar from "../../components/chat/chatSidebar";
import ChatWindow from "../../components/chat/chatWindow";

export default function ChatsPage() {
  const {
    messages,
    users,
    activeUser,
    setActiveUser,
    filteredMessages,
    filter,
    setFilter,
    search,
    setSearch
  } = useChat();

  return (
    <div className="flex h-[85vh]">
      <ChatSidebar
        users={users}
        activeUser={activeUser}
        setActiveUser={setActiveUser}
        search={search}
        setSearch={setSearch}
      />

      <ChatWindow
        messages={filteredMessages}
        filter={filter}
        setFilter={setFilter}
        activeUser={activeUser}
      />
    </div>
  );
}
