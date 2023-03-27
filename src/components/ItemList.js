import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function ItemList({ items }) {
  const router = useRouter();

  return (
    <CardWrapper>
      {items
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, 10)
        .map((item) => (
          <StyledCard key={item._id}>
            <StyledImage
              onClick={() => router.push(`/item-page/${item._id}`)}
              src={item.images[0]}
              height="150"
              width="150"
              alt={item.description}
            />
            <StyledTitle>{item.title}</StyledTitle>
            <TextWrapper>
              <StyledText>{item.difficulty}</StyledText>
              <StyledText>{item.price} €</StyledText>
            </TextWrapper>
          </StyledCard>
        ))}
    </CardWrapper>
  );
}

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledCard = styled.div`
  width: 150px;
  height: 250px;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

const StyledTitle = styled.p`
  text-transform: uppercase;
  font-size: 9pt;
  font-weight: 250;
  margin-top: 6px;
  margin-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
`;
const StyledText = styled.p`
  font-size: 10pt;
  margin: 0;
`;
