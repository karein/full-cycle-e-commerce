import { Product } from "@/models";

export class ProductService {
  async getProduct(productId: string): Promise<Product> {
    const response = await fetch(`${process.env.CATALOG_API_URL}/product/${productId}`, {
      next: {
        revalidate: 10,
      }
    });
    return response.json()
  }
}