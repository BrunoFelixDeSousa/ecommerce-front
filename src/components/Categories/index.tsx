import { useEffect, useState } from "react";
import { CardCategory } from "../CardCategory";
import { Container, Text, ContainerCard } from "./styles";
import { api } from "../../services/api";

interface Category {
  id: string;
  name: string;
  imageLink: string;
}

export function Categories() {
  // Estado para armazenar as categorias obtidas da API
  const [categories, setCategories] = useState<Category[]>([]);

  // Efeito para buscar as categorias da API assim que o componente é montado
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get("/category/limited");
        // Atualiza o estado com as categorias obtidas da resposta da API
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <Container>
      <Text>Browse The Rang</Text>
      <ContainerCard>
        {categories.map((category) => (
          <CardCategory key={category.id} category={category} />
        ))}
        {/* <CardCategory />
        <CardCategory />
        <CardCategory /> */}
      </ContainerCard>
    </Container>
  );
}
