import { Order } from "./interface";

export function calculateTotalPrice(order: Order): boolean {
  const totalPrice = order.items.reduce((sum, cur) => {
    sum = sum + cur.unit * cur.unitPrice;
    return sum;
  }, 0);

  return totalPrice === order.totalPrice;
}
