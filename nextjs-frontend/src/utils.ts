import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { Order, Product } from "./models"

export function calculeTotal(
  items: { product: Product; quantity: number; attributes: any[] }[]
) {
  return items.reduce((acc, item) => {
    return acc + item.quantity * item.product.price
  }, 0)
}

export function calculateTotalOrder(order: Order) {}

export function searchProducts() {}
