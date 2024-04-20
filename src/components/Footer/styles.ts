import styled from "styled-components";

export const Container = styled.footer`
  max-width: 100%;
  height: 25rem;
  padding: 2.5rem 6.25rem;
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterContent = styled.div`
  /* padding: 2rem; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
`;

export const FooterDescription = styled.span`
  margin: 2rem 0;
  text-align: start;
`;

export const FooterContent1 = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  span {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-text-3);
  }
`;

export const FooterContent2 = styled.div`
  ul {
    li:first-child {
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-text-3);

      padding-bottom: 1rem;
    }
    li {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 1rem;

      a {
        color: var(--color-header);
      }
    }
  }
`;

export const FooterContent3 = styled.div`
  ul {
    li:first-child {
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-text-3);

      padding-bottom: 1rem;
    }
    li {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 1rem;

      a {
        color: var(--color-header);
      }
    }
  }
`;

export const FooterContent4 = styled.div`
  display: flex;
  flex-direction: column;

  span {
    padding-bottom: 2rem;
  }

  div {
    display: flex;
    gap: 1rem;
    input {
      border: none;
      border-bottom: 1px solid black;
    }

    button {
      border: none;
      border-bottom: 1px solid black;
      font-size: 1rem;
      font-weight: 500;
      background-color: transparent;
    }
  }
`;
