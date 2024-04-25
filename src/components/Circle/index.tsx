import { Container, InfoCircle } from "./styles";

interface CircleProps {
  isNew: boolean;
  discountPercent?: number;
}

export function Circle({ isNew, discountPercent }: CircleProps) {

  let displayInfo = "";

  if (isNew) {
    displayInfo = "new";
  } else if (discountPercent !== undefined) {
    displayInfo = `-${discountPercent}%`;
  }

  const circleColor = isNew ? "#2EC1AC" : "#E97171";

  if (!isNew && !discountPercent) return null;

  return (
    <Container style={{ backgroundColor: circleColor }}>
      <InfoCircle>{displayInfo}</InfoCircle>
    </Container>
  );
}
