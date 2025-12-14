"use client";

export default function ChatSidebar({ users, activeUser, setActiveUser, search, setSearch }: any) {
  return (
    <div className="w-64 bg-white shadow-lg p-4 border-r overflow-y-auto">
      <h2 className="text-xl font-semibold mb-3">WhatsApp Users</h2>

      <input
        className="border p-2 w-full rounded mb-3"
        placeholder="Search users…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-2">
        {users.map((jid: string) => (
          <div
            key={jid}
            onClick={() => setActiveUser(jid)}
            className={`p-2 rounded cursor-pointer ${
              activeUser === jid ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            {jid}
          </div>
        ))}
      </div>
    </div>
  );
}
