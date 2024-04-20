import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 16.875rem;
  background-color: var(--backgroud-info);

  margin-top: 3.25rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  padding: .2rem;

  @media (max-width: 768px) {
    height: 10rem;
    gap: .6rem;
  }
`;

export const InfoDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const PrimaryText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SecondaryText = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-text-3);

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Image = styled.img`
  width: 3.5rem;
  height: 3.75rem;

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.75rem;
  }
`;
