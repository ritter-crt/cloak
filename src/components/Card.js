import styled from 'styled-components';

export default function CardTest() {
  return (
    <Cards>
      <Card>
        <CardImage>This is an image</CardImage>
        <CardTitle>This is the title</CardTitle>
        <CardContent>This is the price and level</CardContent>
      </Card>
      <Card>
        <CardImage>This is an image</CardImage>
        <CardTitle>This is the title</CardTitle>
        <CardContent>This is the price and level</CardContent>
      </Card>
      <Card>
        <CardImage>This is an image</CardImage>
        <CardTitle>This is the title</CardTitle>
        <CardContent>This is the price and level</CardContent>
      </Card>
      <Card>
        <CardImage>This is an image</CardImage>
        <CardTitle>This is the title</CardTitle>
        <CardContent>This is the price and level</CardContent>
      </Card>
      <Card>
        <CardImage>This is an image</CardImage>
        <CardTitle>This is the title</CardTitle>
        <CardContent>This is the price and level</CardContent>
      </Card>
      <Card>
        <CardImage>This is an image</CardImage>
        <CardTitle>This is the title</CardTitle>
        <CardContent>This is the price and level</CardContent>
      </Card>
      <Card>
        <CardImage>This is an image</CardImage>
        <CardTitle>This is the title</CardTitle>
        <CardContent>This is the price and level</CardContent>
      </Card>
      <Card>
        <CardImage>This is an image</CardImage>
        <CardTitle>This is the title</CardTitle>
        <CardContent>This is the price and level</CardContent>
      </Card>
    </Cards>
  );
}

const Cards = styled.div`
  margin: 10% auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;
const Card = styled.div`
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
`;
const CardImage = styled.div`
  width: 100%;
  display: block;
`;
const CardTitle = styled.div`
  line-height: 1.5;

  padding: 15px;
`;

const CardContent = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
