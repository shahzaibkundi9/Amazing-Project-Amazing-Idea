"use client";

import {
  LineChart as RLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function LineChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white p-4 rounded shadow h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RLineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#000" strokeWidth={2} />
        </RLineChart>
      </ResponsiveContainer>
    </div>
  );
}
