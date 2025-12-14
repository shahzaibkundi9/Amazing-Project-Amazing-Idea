"use client";

import Link from "next/link";

export default function PaymentCard({ payment }: { payment: any }) {
  return (
    <Link href={`/payments/${payment.id}`}>
      <div className="bg-white shadow p-4 rounded hover:shadow-md cursor-pointer">
        <h2 className="font-semibold">Payment ID: {payment.id}</h2>

        <p className="text-sm text-gray-600">Order: {payment.orderId}</p>
        <p className="text-sm text-gray-600">User: {payment.userId}</p>

        <span
          className={`inline-block px-2 py-1 rounded text-xs mt-2 ${
            payment.status === "paid"
              ? "bg-green-200 text-green-900"
              : payment.status === "pending"
              ? "bg-yellow-200 text-yellow-900"
              : payment.status === "rejected"
              ? "bg-red-200 text-red-900"
              : "bg-gray-200"
          }`}
        >
          {payment.status.toUpperCase()}
        </span>

        <p className="text-sm text-gray-500 mt-2">
          {new Date(payment.createdAt).toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
