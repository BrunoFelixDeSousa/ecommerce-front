import { useEffect, useState } from "react";
import { CardProduct } from "../CardProduct";
import { Container, ContainerCard, Text } from "./styles";
import { api } from "../../services/api";
import { Button } from "../Button";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercent: number;
  isNew: boolean;
  imageLink: string;
}

interface ProductButtonProps {
  buttonTypes: "default" | "pagination";
}

export function Products({ buttonTypes }: ProductButtonProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const isLimit = buttonTypes === "default" ? "limited" : "";

      try {
        const response = await api.get(`/product/${isLimit}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [buttonTypes]);

  return (
    <Container>
      {buttonTypes === "default" ? <Text>Our Products</Text> : null}

      <ContainerCard>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ContainerCard>
      {buttonTypes === "default" ? <Button /> : null}
    </Container>
  );
}
