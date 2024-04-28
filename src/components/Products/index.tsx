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
  const [currentPage, setCurrentPage] = useState(1);        // Estado para controlar a página atual
  const [totalPages, setTotalPages] = useState(1);          // Estado para armazenar o total de páginas

  const pageSize = 16; // Tamanho da página

  // V1
  // useEffect(() => {
  //   async function fetchProducts() {
  //     const isLimit = buttonTypes === "default" ? "limited" : "";

  //     try {
  //       const response = await api.get(`/product/${isLimit}`);
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   }

  //   fetchProducts();

  // }, [buttonTypes]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get(`/product`, {
          params: {
            page: currentPage.toString(),
            pageSize: pageSize.toString(),
          },
        });
        setProducts(response.data.products);             // Atualizar os produtos com os dados recebidos da API
        setTotalPages(response.data.totalPage);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [currentPage]);

  return (
    <Container>
      {buttonTypes === "default" ? <Text>Our Products</Text> : null}

      <ContainerCard>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ContainerCard>
      {buttonTypes === "default" ? <Button /> : null}

      {buttonTypes === "pagination" ? (
        <div>
          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      ) : null}
    </Container>
  );
}
