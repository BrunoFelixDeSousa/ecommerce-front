import { ButtonWithBorder } from "../Button";
import { CardProduct } from "../CardProduct";
import { Container, ContainerCard, Text } from "./styles";

export function Products() {
  return (
    <Container>
      <Text>Our Products</Text>
      <ContainerCard>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </ContainerCard>
        <ButtonWithBorder>See Details</ButtonWithBorder>
    </Container>
  );
}
