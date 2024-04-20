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

import syltherine from "../../assets/images/syltherine.png";
import {
  RiArrowLeftRightLine,
  RiHeartLine,
  RiShareLine,
} from "@remixicon/react";
import { Button } from "../Button";
import { Circle } from "../Circle";

export function CardProduct() {
  return (
    <Card>
      <Circle info="new" backgroundColor="" showCircle={true} />
      <CardImageProduct src={syltherine}></CardImageProduct>
      <CardInfoProduct>
        <CardNameProduct>Syltherine</CardNameProduct>
        <CardDescriptionProduct>Stylish cafe chair</CardDescriptionProduct>
        <CardPrice>
          <CardCashPrice>R$ 2.500.000</CardCashPrice>
          <CardRegularPrice>R$ 3.500.000</CardRegularPrice>
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
