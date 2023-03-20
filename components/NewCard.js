import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function NewCard({ items }) {
  const router = useRouter();

  return (
    <ContentWrapper>
      <StyledHeader>newly added</StyledHeader>
      <CardWrapper>
        {items.slice(0, 6).map((item) => (
          <StyledCard key={item._id}>
            <StyledImage
              onClick={() => router.push(`/item-page/${item._id}`)}
              src={item.image}
              height={150}
              width={150}
              alt={item.title}
            />
            <StyledTitle>{item.title}</StyledTitle>
            <TextWrapper>
              <StyledText>{item.difficulty}</StyledText>
              <StyledText>{item.price} €</StyledText>
            </TextWrapper>
          </StyledCard>
        ))}
      </CardWrapper>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  margin-top: 80px;
  padding-left: 9%;
  padding-right: 9%;
  margin-bottom: 20%;

`;

const StyledHeader = styled.h1`
  font-size: 16pt;
  font-weight: 500;
  text-transform: lowercase;
  margin-bottom:20px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap:10px;
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
  margin-top:6px;
  margin-bottom:4px
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledText = styled.p`
  font-size: 10pt;
  margin:0;
`;

