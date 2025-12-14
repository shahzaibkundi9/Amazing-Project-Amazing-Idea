"use client";

import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-black text-white p-5">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <nav className="space-y-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/chats">Chats</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/payments">Payments</Link>
        <Link href="/ai">AI Settings</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </aside>
  );
};
