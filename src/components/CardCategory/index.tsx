import { Card, CardImage, Text } from "./styles";

import dining from "../../assets/images/dining.png";

export function CardCategory() {
  return (
    <Card>
      <CardImage src={dining} />
      <Text>Dining</Text>
    </Card>
  );
}
