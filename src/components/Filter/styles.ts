import styled from "styled-components";

export const Container = styled.section`
  max-width: 100%;
  height: 6rem;
  margin-bottom: 3rem;
  padding-left: 9rem;
  padding-right: 9rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--backgroud-sencodary);

  @media (max-width: 768px) {
    height: 5.5rem;

    flex-wrap: wrap;

    padding-left: 0.1rem;
    padding-right: 0.1rem;
  }
`;

export const Icon = styled.img`
  height: 1.5rem;
  width: 1rem;
`;

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  font-size: 1.25rem;

  a {
    color: black;
  }

  div {
    margin-left: 1rem;
    padding-left: 2rem;
    border-left: 2px solid var(--color-text-3);

    p {
      font-size: 1rem;
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 0.1rem;
    font-size: 1rem;

    div {
      margin-left: 0.1rem;
      padding-left: 0.2rem;
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  padding: 1rem;

  select {
    appearance: none;
    padding: 1rem;
    color: var(--color-text-3);
    border: none;
    border-radius: 5px;
  }
  // não funcionou :(
  /* select option {
    padding: 2rem;
    background-color: #fff;
    color: #333;
  } */
`;
