import {
  Card,
  CardImageProduct,
  CardInfoProduct,
  CardNameProduct,
  CardDescriptionProduct,
  CardPrice,
  CardCashPrice,
  CardRegularPrice,
  CardContent,
  CardLinks,
  CardLink,
  //   CardButton,
} from "./styles";

import {
  RiArrowLeftRightLine,
  RiHeartLine,
  RiShareLine,
} from "@remixicon/react";
import { Button } from "../Button";
import { Circle } from "../Circle";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercent: number;
  isNew: boolean;
  imageLink: string;
}

interface CardProductProps {
  product: Product;
}

export function CardProduct({ product }: CardProductProps) {
  const regularPrice = (price: number, discountPercent: number) => {
    if (discountPercent === null) return null;
    const result = (price - ((price * discountPercent) / 100));
    return result.toFixed(2);
  };

  // Determina se deve mostrar o preço com desconto
  const hasDiscount = product.discountPercent !== null;
  console.log(hasDiscount)
  // Define o valor de CardCashPrice e CardRegularPrice com base no desconto
  // Se hasDiscount for falso, cardCashPrice recebe o preço do produto e cardRegularPrice recebe null
  // se hasDiscount for true, cardCashPrice recebe o preço do produto com desconto e cardRegularPrice recebe o valor do produto
  // trocando as posições
  const cardCashPrice = hasDiscount
    ? regularPrice(product.price, product.discountPercent)
    : product.price;
  const cardRegularPrice = hasDiscount ? product.price : null;

  return (
    <Card>
      <Circle /*info={product.isNew}*/ info="new" showCircle={product.isNew} />
      <CardImageProduct src={product.imageLink}></CardImageProduct>
      <CardInfoProduct>
        <CardNameProduct>{product.name}</CardNameProduct>
        <CardDescriptionProduct>{product.description}</CardDescriptionProduct>
        <CardPrice>
          {/* <CardCashPrice>R$ {product.price}</CardCashPrice>
          {product.discountPercent !== null? (
            <CardRegularPrice>
              R$ {regularPrice(product.price, product.discountPercent)}
            </CardRegularPrice>
          ): null} */}
          {/* Verifa se tem valor de desconto, se true então a posição dos valores são invertidas*/}
          <CardCashPrice>R${cardCashPrice}</CardCashPrice>

          {hasDiscount ? (
            <CardRegularPrice>R$ {cardRegularPrice}</CardRegularPrice>
          ) : null}
        </CardPrice>
      </CardInfoProduct>
      <CardContent>
        {/* <CardButton>See Details</CardButton> */}
        <Button>See Details</Button>
        <CardLinks>
          <CardLink href="#">
            <RiShareLine />
            Share
          </CardLink>
          <CardLink href="#">
            <RiArrowLeftRightLine />
            Compare
          </CardLink>
          <CardLink href="#">
            <RiHeartLine />
            Like
          </CardLink>
        </CardLinks>
      </CardContent>
    </Card>
  );
}
