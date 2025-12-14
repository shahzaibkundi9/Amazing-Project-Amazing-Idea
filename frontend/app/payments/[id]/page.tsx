"use client";

import { useEffect, useState } from "react";
import { api } from "../../../lib/api";
import PaymentViewer from "../../../components/payments/paymentViewer";

export default function PaymentPage({ params }: any) {
  const { id } = params;

  const [payment, setPayment] = useState<any>(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get(`/payments/${id}`);
    if (res.success) setPayment(res.data);
  };

  const updateStatus = async (status: string) => {
    const res = await api.put(`/payments/${id}/status`, { status });
    if (res.success) load();
  };

  if (!payment) return <p>Loading…</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Payment Details</h1>

      <div className="bg-white p-4 shadow rounded">
        <p><strong>Payment ID:</strong> {payment.id}</p>
        <p><strong>Order:</strong> {payment.orderId}</p>
        <p><strong>User:</strong> {payment.userId}</p>
        <p><strong>Method:</strong> {payment.method}</p>
        <p><strong>Amount:</strong> Rs {payment.amount}</p>

        <PaymentViewer screenshot={payment.screenshot} />

        <h3 className="font-semibold mt-4">Update Status</h3>

        <div className="flex gap-3 mt-2">
          <button
            onClick={() => updateStatus("paid")}
            className="px-3 py-1 bg-green-600 text-white rounded"
          >
            Verify (PAID)
          </button>

          <button
            onClick={() => updateStatus("rejected")}
            className="px-3 py-1 bg-red-600 text-white rounded"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
      }
