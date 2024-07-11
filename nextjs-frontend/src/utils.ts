import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

import { Order, Product } from "./models"

export function calculeTotal(
  items: { product: Product; quantity: number; attributes: any[] }[]
) {
  return items.reduce((acc, item) => {
    return acc + item.quantity * item.product.price
  }, 0)
}

export function calculateTotalOrder(order: Order) { }

export function searchProducts(
  router: AppRouterInstance,
  search: string | undefined | null,
  category_id: string | undefined | null
) {
  let path = `/products`;

  const urlSearchParams = new URLSearchParams();

  if (search) {
    urlSearchParams.append("search", search);
  }

  // 0 -> todas as categorias
  if (category_id && category_id !== "0") {
    urlSearchParams.append("category_id", category_id);
  }

  if (urlSearchParams.toString()) {
    path += `?${urlSearchParams.toString()}`
  }

  router.push(path);
}
