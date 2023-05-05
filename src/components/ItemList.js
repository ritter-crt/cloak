import { useRouter } from 'next/router';

import {
  Card,
  CardContent,
  CardImage,
  CardTitle,
  Cards,
  StyledImage,
} from './common/Card.styles';

export default function ItemList({ items }) {
  const router = useRouter();

  return (
    <Cards>
      {items
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, 10)
        .map((item) => (
          <Card key={item._id}>
            <CardImage>
              <StyledImage
                onClick={() => router.push(`/item-page/${item._id}`)}
                src={item.images[0]}
                fill={true}
                alt={item.description}
              />
            </CardImage>
            <CardTitle>{item.title}</CardTitle>
            <CardContent>
              <p>{item.difficulty}</p>
              <p>{item.price} €</p>
            </CardContent>
          </Card>
        ))}
    </Cards>
  );
}
