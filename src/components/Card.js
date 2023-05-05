import styled from 'styled-components';
import {
  CardContent,
  CardImage,
  CardTitle,
  StyledImage,
} from './common/Card.styles';

export default function Card() {
  return (
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
  );
}
