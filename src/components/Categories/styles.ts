import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 666px;

  margin: 4.625rem auto 2.5rem;

  @media (max-width: 768px) {
    margin: 2rem auto 1rem;
  }
`;

export const Text = styled.h1`
  text-align: center;
  font-size: 2rem;
  padding-bottom: 2rem;
  color: var(--color-text);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 768px) {
        flex-direction: column;
    } */
`;
