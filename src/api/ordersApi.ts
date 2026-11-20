import { OrderWire } from "./types";

const MOCK_WIRE: OrderWire[] = [
  { id: "ord-101", customer_name: "Alice Brown", total_cents: "14500", status: "paid", created_at: "2026-10-01" },
  { id: "ord-102", customer_name: "Bob Carter", total_cents: "8200", status: "pending", created_at: "2026-10-02" },
  { id: "ord-103", customer_name: "Clara Diaz", total_cents: "23900", status: "shipped", created_at: "2026-10-03" },
];

export async function fetchOrders(): Promise<OrderWire[]> {
  return Promise.resolve(MOCK_WIRE);
}
