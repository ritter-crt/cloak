import { useRouter } from 'next/router';

import {
  CardContent,
  CardImage,
  CardTitle,
  CardWrapper,
  StyledImage,
} from './Card.styles';

export default function Card({ item }) {
  const router = useRouter();
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
}
