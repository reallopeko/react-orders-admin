export type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";

export interface OrderWire {
  id: string;
  customer_name: string;
  total_cents: string;
  status: OrderStatus;
  created_at: string;
}

export interface Order {
  id: string;
  customerName: string;
  totalCents: number;
  status: OrderStatus;
  createdAt: string;
}
