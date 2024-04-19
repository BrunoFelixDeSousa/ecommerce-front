import {
  Card,
  CardImageProduct,
  CardInfoProduct,
  CardNameProduct,
  CardDescriptionProduct,
  CardPrice,
  CardCashPrice,
  CardRegularPrice

} from "./styles";

import syltherine from "../../assets/images/syltherine.png";

export function CardProduct() {
  return (
    <Card>
      <CardImageProduct src={syltherine}></CardImageProduct>
      <CardInfoProduct>
        <CardNameProduct>Syltherine</CardNameProduct>
        <CardDescriptionProduct>Stylish cafe chair</CardDescriptionProduct>
        <CardPrice>
            <CardCashPrice>R$ 2.500.000</CardCashPrice>
            <CardRegularPrice>R$ 3.500.000</CardRegularPrice>
        </CardPrice>
      </CardInfoProduct>
    </Card>
  );
}
