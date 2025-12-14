"use client";

export default function StatCard({ title, value }: { title: string; value: any }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
