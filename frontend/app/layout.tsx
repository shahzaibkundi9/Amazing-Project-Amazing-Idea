// Roman Urdu: Global layout—auth provider, socket provider, styling sab yahan load hota hai

import "./globals.css";
import { Sidebar } from "../components/sidebar";
import { Navbar } from "../components/navbar";

export const metadata = {
  title: "Admin Panel",
  description: "WhatsApp AI Automation Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-100">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
