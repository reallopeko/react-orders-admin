import { Order, OrderStatus } from "../api/types";

export function filterOrders(orders: Order[], query: string, status: OrderStatus | "all"): Order[] {
  return orders.filter(order => {
    const matchesStatus = status === "all" || order.status === status;
    const matchesQuery = !query || order.customerName.includes(query);
    return matchesStatus && matchesQuery;
  });
}

export function sumRevenueCents(orders: Order[]): number {
  return orders.reduce((acc, item) => acc + item.totalCents, 0);
}
