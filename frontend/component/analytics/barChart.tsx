"use client";

import {
  BarChart as RBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BarChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white p-4 rounded shadow h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RBarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#000" />
        </RBarChart>
      </ResponsiveContainer>
    </div>
  );
}
