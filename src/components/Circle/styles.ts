import styled from "styled-components";

export const Container = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: var(--color-circle-1);
  border-radius: 50%;

  position: absolute;
  top: 0;
  right: 0;

  margin: 1rem;
`;

export const InfoCircle = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--background);
`;
