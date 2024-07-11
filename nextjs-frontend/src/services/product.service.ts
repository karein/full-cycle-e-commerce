import { Product } from "@/models";

export class ProductService {
  async getProducts({
    search,
    category_id
  }: {
    search: string | undefined;
    category_id: string | undefined;
  }): Promise<Product[]> {
    let url = `${process.env.CATALOG_API_URL}/product`;

    if (category_id) {
      url += `/category/${category_id}`
    }

    // ao fazer essa chamada, next verifica se tem cache e se está válido. Assim otimiza a aplicação e, caso o serviço da requisição fique indisponível, ainda vai mostrar os produtos. Esse é o comportamento padrão do fetch. Caso seja utilizada outra lib para requisições ou que não utilize fetch por baixo dos panos, esse comportamento não vai acontecer.
    const response = await fetch(url, {
      next: {
        revalidate: 10,
      }
    });
    let data = await response.json();
    data = !data ? [] : data;

    if (search) {
      return data.filter((product: Product) => {
        return product.name.toLowerCase().includes(search.toLowerCase())
      })
    }

    return data;
  }

  async getProduct(productId: string): Promise<Product> {
    const response = await fetch(`${process.env.CATALOG_API_URL}/product/${productId}`, {
      next: {
        revalidate: 10,
      }
    });
    return response.json()
  }
}