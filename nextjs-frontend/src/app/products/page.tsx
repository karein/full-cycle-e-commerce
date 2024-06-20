import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material"
import Link from "next/link"
import Image from "next/legacy/image"
import { ShoppingCart } from "@mui/icons-material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

import { Product } from "@/models"

async function getProducts({
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

async function ListProductsPage({ searchParams }: { searchParams: { search?: string, category_id?: string } }) {
  const search = searchParams.search;
  const category_id = searchParams.category_id;

  const products = await getProducts({ search, category_id });

  return (
    <Grid2 container spacing={2}>
      {products.length === 0 && (
        <Grid2 xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5">Nenhum produto encontrado</Typography>
        </Grid2>
      )}
      {products.map((product, key) => (
        <Grid2 xs={12} sm={6} md={4} key={key} className={"product-item"}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingTop: "56.25%",
              }}
            >
              <Image
                src={product.image_url}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>

              <Typography sx={{ color: "primary.main" }}></Typography>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
              <Link
                href={`/products/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                {/* <Box> */}
                <Button size="small" startIcon={<ShoppingCart />}>
                  Compar
                </Button>
                {/* </Box> */}
              </Link>
            </CardActions>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  )
}

export default ListProductsPage;
