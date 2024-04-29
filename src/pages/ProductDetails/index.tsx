import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  Container,
  ContentPage,
  ContentPageHome,
  ContentPages,
  ImageWrapper,
  InfoContainer,
  LargeImage,
  NameProduct,
  ProductContainer,
  ProductContent,
  ProductImages,
  ProductInfo,
  SmallImage,
  Size,
  Color,
  ButtonColor,
  ButtonSize,
  ProductButtons,
  ButtonQtd,
  ButtonAddCart,
  ButtonCompare,
  ButtonMinus,
  ButtonPlus,
  ProductMoreInfo,
  Info,
  ProductDescription,
  DescriptionTitle,
  AddInformationTitle,
  Description,
} from "./styles";
import {
  RiArrowRightSLine,
  RiFacebookCircleFill,
  RiLinkedinBoxFill,
  RiStarFill,
  RiStarHalfFill,
  RiTwitterXFill,
} from "@remixicon/react";
import { Footer } from "../../components/Footer";

interface Product {
  id: string;
  name: string;
  sku: string;
  categoryId: string;
  description: string;
  largeDescription: string;
  price: number;
  discountPercent: number;
  isNew: boolean;
  imageLink: string;
  otherImagesLink: string[];
}

export function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id]);

  return (
    <>
      <Header />
      <InfoContainer>
        <ContentPage>
          <ContentPageHome to="/">Home</ContentPageHome>
          <RiArrowRightSLine />
          <ContentPages to="/shop">Shop</ContentPages>
          <RiArrowRightSLine />
          <NameProduct>{product?.name}</NameProduct>
        </ContentPage>
      </InfoContainer>
      <Container>
        <ProductContainer>
          <ProductImages>
            <ImageWrapper>
              {product?.otherImagesLink.map((link, index) => (
                <SmallImage src={link} key={index} />
              ))}
            </ImageWrapper>
            <LargeImage src={product?.imageLink} alt="Large Image" />
          </ProductImages>
          <ProductInfo>
            {product && (
              <ProductContent>
                <h1>{product?.name}</h1>
                <span>R$ {product.price}</span>
                <ul>
                  <li>
                    <RiStarFill color="#FFC700" />
                  </li>
                  <li>
                    <RiStarFill color="#FFC700" />
                  </li>
                  <li>
                    <RiStarFill color="#FFC700" />
                  </li>
                  <li>
                    <RiStarFill color="#FFC700" />
                  </li>
                  <li>
                    <RiStarHalfFill color="#FFC700" />
                  </li>
                  <li>
                    <div>5 Customer Review</div>
                  </li>
                </ul>
                <p>{product.largeDescription}</p>

                <Size>
                  Size
                  <ul>
                    <li>
                      <ButtonSize color="#B88E2F">L</ButtonSize>
                    </li>
                    <li>
                      <ButtonSize color="#F9F1E7">XL</ButtonSize>
                    </li>
                    <li>
                      <ButtonSize color="#F9F1E7">XS</ButtonSize>
                    </li>
                  </ul>
                </Size>
                <Color>
                  Color
                  <ul>
                    <li>
                      <ButtonColor color="#9747ff"></ButtonColor>
                    </li>
                    <li>
                      <ButtonColor color="#121212"></ButtonColor>
                    </li>
                    <li>
                      <ButtonColor color="#B88E2F"></ButtonColor>
                    </li>
                  </ul>
                </Color>

                <ProductButtons>
                  <ButtonQtd>
                    <ButtonMinus>-</ButtonMinus>
                    <span>1</span>
                    <ButtonPlus>+</ButtonPlus>
                  </ButtonQtd>
                  <ButtonAddCart>Add To Cart</ButtonAddCart>
                  <ButtonCompare>+ Compare</ButtonCompare>
                </ProductButtons>

                <ProductMoreInfo>
                  <Info>SKU : {product.sku}</Info>
                  <Info>Category : {product.categoryId}</Info>
                  <Info>
                    Share :
                    <RiFacebookCircleFill size={20} color="#000000" />
                    <RiLinkedinBoxFill size={20} color="#000000" />
                    <RiTwitterXFill size={20} color="#000000" />
                  </Info>
                </ProductMoreInfo>
              </ProductContent>
            )}
          </ProductInfo>
        </ProductContainer>
      </Container>
      <ProductDescription>
        <div>
          <DescriptionTitle>Description</DescriptionTitle>
          <AddInformationTitle>Additional Information</AddInformationTitle>
        </div>

        <Description>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </Description>
        <Description>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </Description>
      </ProductDescription>
      <Footer />
    </>
  );
}
