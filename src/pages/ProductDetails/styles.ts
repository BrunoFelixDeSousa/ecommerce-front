import { Link } from "react-router-dom";
import styled from "styled-components";

export const InfoContainer = styled.div`
  max-width: 100%;
  height: 6rem;
  padding-left: 9rem;

  display: flex;
  align-items: center;

  background-color: var(--backgroud-sencodary);

  @media (max-width: 768px) {
    height: 5.5rem;

    padding-left: 1rem;
  }
`;

export const NameProduct = styled.span`
  font-size: 1rem;
  font-weight: 400;
  padding-left: 2rem;
  margin-left: 1rem;

  border-left: 2px solid var(--color-text-4);
`;

export const ContentPage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const ContentPageHome = styled(Link)`
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text-4);
`;

export const ContentPages = styled(Link)`
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text-4);
`;

export const Container = styled.div`
  max-width: 90rem;
  height: 51rem;
  margin: 0 auto;

  @media (max-width: 1000px) {
    height: 82rem;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  margin: 2rem auto;
  justify-content: center;
  /* flex-wrap: wrap; */

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const ProductImages = styled.div`
  width: 34rem;
  height: 31.25rem;

  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 1rem;
    width: 27.5rem;
    height: 31.25rem;
  }
`;

export const ProductInfo = styled.div`
  width: 37.875rem;
  height: 45.625rem;

  @media (max-width: 768px) {
    gap: 1rem;
    width: 35.5rem;
    height: 35.25rem;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h1 {
    font-size: 2.625rem;
    font-weight: 400;
  }

  span {
    color: var(--color-text-4);
    font-size: 1.5rem;
    font-weight: 500;
  }

  ul {
    display: flex;
    li {
      margin-right: 0.5rem;

      div {
        border-left: 2px solid #9f9f9f;
        padding-left: 2rem;
        margin-left: 1rem;
        font-size: 0.813rem;
        font-weight: 400;
      }
    }
  }

  p {
    width: 424px;
    font-size: 0.813rem;
    font-weight: 400;
    line-height: 1.3rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SmallImage = styled.img`
  width: 4.75rem;
  height: 5rem;
  border-radius: 10px;
`;

export const LargeImage = styled.img`
  width: 26.438rem;
  height: 30.25rem;
  border-radius: 10px;
`;

export const Size = styled.div`
  color: var(--color-text-4);
  font-size: 1rem;
  margin-top: 0.6rem;
  margin-bottom: 0.3rem;

  ul {
    li {
      margin-top: 0.5rem;
      margin-right: 1rem;
    }
  }
`;

export const Color = styled.div`
  color: var(--color-text-4);
  font-size: 1rem;

  ul {
    li {
      margin-top: 0.5rem;
      margin-right: 1rem;
    }
  }
`;

export const ButtonColor = styled.button`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.color};
`;

export const ButtonSize = styled.button`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.color};
  color: black;
`;

export const ProductButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonQtd = styled.div`
  width: 7.688rem;
  height: 4rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border: 1px solid #9f9f9f;
  border-radius: 5px;

  span {
    color: #000000;
  }
`;

export const ButtonMinus = styled.button`
  font-size: 1rem;
  font-weight: 500;
  border: none;
  background-color: transparent;
`;

export const ButtonPlus = styled.button`
  font-size: 1rem;
  font-weight: 500;
  border: none;
  background-color: transparent;
`;

export const ButtonAddCart = styled.button`
  width: 13.438rem;
  height: 4rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: transparent;
`;

export const ButtonCompare = styled.button`
  width: 13.438rem;
  height: 4rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: transparent;
`;

export const ProductMoreInfo = styled.div`
  margin-top: 4.25rem;
  padding-top: 2rem;
  border-top: 1px solid #9f9f9f;
  /* border-bottom: 3rem; */
`;

export const Info = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #9f9f9f;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProductDescription = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
  margin-bottom: 3rem;
  gap: 1rem;

  div {
    display: flex;
    gap: 2rem;
  }
`;

export const DescriptionTitle = styled.h2`
  /* width: 100%; */
  font-size: 1.5rem;
  color: #000000;
  font-weight: 500;
`;

export const AddInformationTitle = styled.h3`
  /* width: 100%; */
  font-size: 1.5rem;
  color: #9f9f9f;
  font-weight: 400;
`;

export const Description = styled.p`
  width: 64rem;
  color: #9f9f9f;
`;

export const ContainerRelatedProducts = styled.div`
  width: 100%;
  height: 48rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  margin-top: 6rem;
  border-bottom: 1px solid #9f9f9f;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
`;

//  Provisório ------------------
export const Card = styled.div`
  width: 17rem;
  height: 27rem;
  display: flex;
  flex-direction: column;
  /* border: 1px solid purple; */
`;

export const CardImageProduct = styled.img`
  width: 100%;
  height: 18rem;
  border-radius: 1px;
  object-fit: cover;
`;

export const CardInfoProduct = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  background-color: var(--backgroud-card);
`;

export const CardNameProduct = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CardDescriptionProduct = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-3);
`;

export const CardPrice = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export const CardCashPrice = styled.span`
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--color-text-2);
`;

export const CardRegularPrice = styled.span`
  font-weight: 400;
  font-size: 1rem;
  color: var(--color-text-4);
  text-decoration: line-through;
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;

  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 3rem;

`;