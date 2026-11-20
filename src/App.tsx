import React, { useEffect, useState } from "react";
import { fetchOrders } from "./api/ordersApi";
import { mapOrder } from "./api/mapOrder";
import { Order, OrderStatus } from "./api/types";
import { filterOrders, sumRevenueCents } from "./lib/filterOrders";

export function App() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<OrderStatus | "all">("all");

  useEffect(() => {
    fetchOrders().then(raw => setOrders(raw.map(mapOrder)));
  }, []);

  const visible = filterOrders(orders, query, status);
  const revenue = sumRevenueCents(visible);

  const markShipped = (id: string) => {
    const target = orders.find(o => o.id === id);
    if (target) target.status = "shipped";
    setOrders(orders);
  };

  return (
    <main>
      <h1>Orders ({visible.length}) — ${(revenue / 100).toFixed(2)}</h1>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search customer" />
      <select value={status} onChange={e => setStatus(e.target.value as OrderStatus | "all")}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="paid">Paid</option>
        <option value="shipped">Shipped</option>
      </select>
      <ul>
        {visible.map(o => (
          <li key={o.id}>
            {o.customerName} — ${(o.totalCents / 100).toFixed(2)} ({o.status})
            <button onClick={() => markShipped(o.id)}>Ship</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
