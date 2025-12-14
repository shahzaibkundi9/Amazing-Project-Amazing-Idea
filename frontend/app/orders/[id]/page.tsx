"use client";

import { useEffect, useState } from "react";
import { api } from "../../../lib/api";
import { useRouter } from "next/navigation";

export default function OrderDetail({ params }: any) {
  const router = useRouter();
  const { id } = params;

  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    loadOrder();
  }, []);

  const loadOrder = async () => {
    const res = await api.get(`/orders/${id}`);
    if (res.success) setOrder(res.data);
  };

  const updateStatus = async (status: string) => {
    const res = await api.put(`/orders/${id}/status`, { status });
    if (res.success) loadOrder();
  };

  if (!order) return <p>Loading…</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Order Details</h1>

      <div className="bg-white p-4 shadow rounded">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>User:</strong> {order.userId}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Created:</strong> {new Date(order.createdAt).toLocaleString()}</p>

        <h3 className="mt-4 font-semibold">Update Status</h3>

        <div className="flex gap-2 mt-2">
          {["pending", "awaiting_advance", "confirmed", "processing", "completed", "cancelled"].map(
            (s) => (
              <button
                key={s}
                onClick={() => updateStatus(s)}
                className="px-3 py-1 bg-black text-white rounded text-xs"
              >
                {s.replace("_", " ").toUpperCase()}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
