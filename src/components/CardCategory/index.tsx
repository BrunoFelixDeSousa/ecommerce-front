import { Card, CardImage, Text } from "./styles";

interface Category {
  id: string;
  name: string;
  imageLink: string;
}

interface CardCategoryProps {
  category: Category;
}

export function CardCategory({ category }: CardCategoryProps) {
  return (
    <Card href="#">
      <CardImage src={category.imageLink} />
      <Text>{category.name}</Text>
    </Card>
  );
}
