// Roman Urdu: Admin dashboard ka base structure

"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import StatCard from "../../components/analytics/statCard";
import LineChart from "../../components/analytics/lineChart";
import BarChart from "../../components/analytics/barChart";

export default function DashboardPage() {
  const [stats, setStats] = useState<any>({
    totalOrders: 0,
    totalUsers: 0,
    totalPaid: 0,
    totalRevenue: 0,
    aiMessages: 0,
  });

  const [salesData, setSalesData] = useState<any[]>([]);
  const [chatData, setChatData] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get("/analytics");
    if (res.success) {
      setStats(res.data.stats);
      setSalesData(res.data.salesChart);
      setChatData(res.data.chatChart);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Analytics Dashboard</h1>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Orders" value={stats.totalOrders} />
        <StatCard title="Paid Payments" value={stats.totalPaid} />
        <StatCard title="Total Revenue" value={`Rs ${stats.totalRevenue}`} />
        <StatCard title="AI Messages" value={stats.aiMessages} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LineChart data={salesData} />
        <BarChart data={chatData} />
      </div>
    </div>
  );
}
