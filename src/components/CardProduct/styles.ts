import styled from "styled-components";

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

  padding: .8rem;

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