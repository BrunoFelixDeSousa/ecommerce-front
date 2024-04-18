import styled from "styled-components";

export const Container = styled.section`
  height: 31.25rem;
  overflow: hidden;
  position: relative;
  background-size: cover;

  @media (max-width: 768px) {
    height: 12rem;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%; /* para centralizar a imagem horizontalmente e abaixar 30% verticalmente dentro do contêiner */

  @media (max-width: 768px) {
    width: 110%;
    height: 100%;
    object-position: center 50%;
  }
`;

export const Box = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 41rem;
  height: 22rem;
  margin-right: 5rem;
  background-color: var(--backgroud-sencodary);
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 15rem;
    height: 10rem;
    margin-right: 0;
    align-items: center;
  }
`;

export const Text = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 5rem 3rem;

  @media (max-width: 768px) {
    font-size: .9rem;
    font-weight: 400;
    padding: 5rem 3rem;
  }
`;
