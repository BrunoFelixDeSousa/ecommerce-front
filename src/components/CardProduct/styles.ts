import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 17rem;
  height: 27rem;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  // Adiciona uma sobreposição escura quando o mouse passa sobre o card
  &:hover::before {
    content: "";
    position: absolute;
    width: 17rem;
    height: 27rem;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  // Mostra o conteúdo do componente CardContent quando o mouse passa sobre o Card
  &:hover div {
    opacity: 1;
  }
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

  padding: 0.8rem;

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

// Estiliza o conteúdo que aparece ao passar o mouse sobre o Card
export const CardContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  width: 100%;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

// export const CardButton = styled.button`
//   background-color: var(--background);
//   color: var(--color-text-5);
//   border: none;
//   padding: 0.75rem 3.5rem;
//   font-size: 1rem;
//   font-weight: 600;
//   border-radius: 2px;
//   cursor: pointer;
//   margin-bottom: 1rem;

//   transition: transform 0.3s ease;

//   &:active {
//     transform: scale(1.1);
//   }
// `;

export const CardLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.1rem;
  justify-content: center;
`;

export const CardLink = styled.a`
  color: var(--background);

  font-size: 1rem;
  font-weight: 600;
  margin: 0 0.2rem;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0.1rem;

  transition: transform 0.3s ease;

  &:active {
    transform: scale(1.1);
  }
`;
