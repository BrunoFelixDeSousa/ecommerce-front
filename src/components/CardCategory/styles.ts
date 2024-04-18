import styled from "styled-components";

// card altura 540px largura 381px
export const Card = styled.div`
  width: 23.813rem;
  height: 33.75rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 90%;

  object-fit: cover;
  border-radius: 10px;

  /* @media (max-width: 768px) {

  } */
`;

export const Text = styled.span`
  width: 100%;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
`;