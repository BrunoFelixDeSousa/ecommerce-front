import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--background);
  color: var(--color-text-5);
  border: none;
  padding: 0.75rem 3.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 1rem;

  transition: transform 0.3s ease;

  &:active {
    transform: scale(1.1);
  }
`;

export const ButtonWithBorder = styled(Button)`
  border: 1px solid var(--color-text-5);
  max-width: 15.313rem;
  width: auto;
`;
