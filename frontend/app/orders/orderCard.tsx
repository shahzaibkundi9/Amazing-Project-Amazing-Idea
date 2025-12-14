"use client";

import Link from "next/link";
import OrderStatus from "./orderStatus";

export default function OrderCard({ order }: { order: any }) {
  return (
    <Link href={`/orders/${order.id}`}>
      <div className="p-4 bg-white shadow rounded cursor-pointer hover:shadow-md">
        <h2 className="text-lg font-semibold">Order ID: {order.id}</h2>

        <p className="text-sm text-gray-600">
          User: {order.userId.slice(0, 8)}...
        </p>

        <OrderStatus status={order.status} />

        <p className="text-sm text-gray-500 mt-2">
          {new Date(order.createdAt).toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
