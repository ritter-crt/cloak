import Image from "next/image";
import styled from "styled-components";

export default function Card({ items }) {
  function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  return (
    <>
      <div>This will be styled tomorrow, so far enjoy the searchbar</div>
      <CardWrapper>
        {items.slice(0, 4).map((item) => (
          <StyledCard key={item._id}>
            <div>{capitalize(item.title)}</div>
            <div>{item.price}€</div>
            <div>Difficulty: {item.difficulty}</div>
            <div>{capitalize(item.category)}</div>
            <StyledImage
              src={item.image}
              height={100}
              width={100}
              alt={item.title}
            />
          </StyledCard>
        ))}
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: center;
`;

const StyledCard = styled.div`
  height:40%;
  width:40%;
  margin:15px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
