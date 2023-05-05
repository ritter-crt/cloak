import { useRouter } from 'next/router';

import { Cards } from './common/Card.styles';

import Card from './Card';

export default function ItemList({ items }) {
  return (
    <Cards>
      {items
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, 10)
        .map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
    </Cards>
  );
}
