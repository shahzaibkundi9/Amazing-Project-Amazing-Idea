// Roman Urdu: WhatsApp style chat bubble

export default function ChatMessage({ msg }: any) {
  const isUser = msg.sender === "user";
  const isBot = msg.sender === "bot";

  return (
    <div
      className={`flex ${isUser ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[60%] p-2 rounded-lg shadow ${
          isUser ? "bg-white" : "bg-black text-white"
        }`}
      >
        <p className="text-sm">{msg.message}</p>
        <div className="text-[10px] text-gray-400 mt-1">
          {new Date(msg.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
