import {
  BannerImage,
  Container,
  Content,
  Page,
  ContentPage,
  ContentPageHome,
  ContentPages,
} from "./styles";
import imageBanner from "../../assets/images/bannerShop.jpg";
import { RiArrowRightSLine } from "@remixicon/react";

export function BannerShop() {
  return (
    <Container>
      <BannerImage src={imageBanner} />
      <Content>
        <Page>Shop</Page>
        <ContentPage>
          <ContentPageHome to="/">Home</ContentPageHome>
          <RiArrowRightSLine />
          <ContentPages to="/shop">Shop</ContentPages>
        </ContentPage>
      </Content>
    </Container>
  );
}

//ri-arrow-right-s-line
