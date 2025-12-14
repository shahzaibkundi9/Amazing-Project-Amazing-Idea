"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import PaymentCard from "../../components/payments/paymentCard";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get("/payments");
    if (res.success) setPayments(res.data);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Payments</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {payments.map((p: any) => (
          <PaymentCard key={p.id} payment={p} />
        ))}
      </div>
    </div>
  );
}
