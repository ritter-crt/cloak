import { useRouter } from 'next/router';

import {
  Card,
  CardWrapper,
  StyledImage,
  CardText,
  CardTextWrapper,
  CardTitle,
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
            <CardTitle height="10%" fontFamily>
              {item.title}
            </CardTitle>
            <CardTextWrapper>
              <CardText>{item.difficulty}</CardText>
              <CardText>{item.price} €</CardText>
            </CardTextWrapper>
          </Card>
        ))}
    </CardWrapper>
  );
}
