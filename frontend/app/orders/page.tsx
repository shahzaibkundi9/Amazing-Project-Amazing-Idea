"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import OrderCard from "../../components/orders/orderCard";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const res = await api.get("/orders");
    if (res.success) setOrders(res.data);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {orders.map((order: any) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
        }
