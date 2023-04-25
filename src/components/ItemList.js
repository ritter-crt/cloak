import { useRouter } from 'next/router';
import {
  Card,
  CardWrapper,
  StyledImage,
  Text,
  TextWrapper,
  Title,
} from './common/Card.styles';

export default function ItemList({ items }) {
  const router = useRouter();

  return (
    <CardWrapper>
      {items
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, 10)
        .map((item) => (
          <Card key={item._id}>
            <StyledImage
              onClick={() => router.push(`/item-page/${item._id}`)}
              src={item.images[0]}
              height="150"
              width="150"
              alt={item.description}
            />
            <Title>{item.title}</Title>
            <TextWrapper>
              <Text>{item.difficulty}</Text>
              <Text>{item.price} €</Text>
            </TextWrapper>
          </Card>
        ))}
    </CardWrapper>
  );
}
