import { useEffect, useState } from "react";
import { ButtonWithBorder } from "../Button";
import { CardProduct } from "../CardProduct";
import { Container, ContainerCard, Text } from "./styles";
import { api } from "../../services/api";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercent: number;
  isNew: boolean;
  imageLink: string;
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/product");
        setProducts(response.data);
      }catch(error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <Container>
      <Text>Our Products</Text>
      <ContainerCard>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}

        
        {/* <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct /> */}
      </ContainerCard>
        <ButtonWithBorder>See Details</ButtonWithBorder>
    </Container>
  );
}
