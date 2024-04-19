import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 2rem auto 1rem;
  }
`;

export const Text = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  color: var(--color-text-2);

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;

  padding: 1rem;
  justify-content: center;
`;
