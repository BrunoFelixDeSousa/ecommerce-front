import { useEffect, useState } from "react";
import { CardProduct } from "../CardProduct";
import { Container, ContainerCard, Text } from "./styles";
import { api } from "../../services/api";
import { Button } from "../Button";
import { Filter } from "../Filter";

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
  const [currentPage, setCurrentPage] = useState(1); // Estado para controlar a página atual
  const [totalPages, setTotalPages] = useState(1); // Estado para armazenar o total de páginas

  // Estado para o filtro
  const [resultsStart, setResultsStart] = useState(0);
  const [resultsEnd, setResultsEnd] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [pageSize, setPageSize] = useState(16)

  // Estado para organizar produtos
  const [sortBy, setSortBy] = useState("default");

  // const pageSize = 16; // Tamanho da página

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get(`/product`, {
          params: {
            page: currentPage.toString(),
            pageSize: pageSize.toString(),
            sortBy: sortBy
          },
        });
        setProducts(response.data.products); // Atualizar os produtos com os dados recebidos da API
        setTotalPages(response.data.totalPage);

        const start = (currentPage - 1) * pageSize + 1;
        const end = Math.min(start + pageSize - 1, totalResults);

        // Setando estado para o filtro
        setResultsStart(start);
        setResultsEnd(end);
        setTotalResults(response.data.total);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [currentPage, totalResults, pageSize, sortBy]);

  return (
    <>
      {buttonTypes === "pagination" ? (
        <Filter
          resultsStart={resultsStart}
          resultsEnd={resultsEnd}
          totalResults={totalResults}
          pageSize={pageSize}
          setPageSize={setPageSize}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      ) : null}
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
    </>
  );
}
