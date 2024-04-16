import styled from "styled-components";

export const Container = styled.div`
  height: 31.25rem;
  overflow: hidden;
  position: relative;
  background-size: cover;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%; /* para centralizar a imagem horizontalmente e abaixar 30% verticalmente dentro do contêiner */
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
`;

export const Text = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 5rem 3rem;
`;
