import { CardCategory } from "../CardCategory";
import { Container, Text, ContainerCard } from "./styles";

export function Categories() {
  return (
    <Container>
      <Text>Browse The Rang</Text>
      <ContainerCard>
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </ContainerCard>
    </Container>
  );
}
