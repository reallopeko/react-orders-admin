import { Order, OrderWire } from "./types";

export function mapOrder(wire: OrderWire): Order {
  return {
    id: wire.id,
    customerName: wire.customer_name,
    totalCents: wire.total_cents as unknown as number,
    status: wire.status,
    createdAt: wire.created_at,
  };
}
