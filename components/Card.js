import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Card({ items }) {
  const router = useRouter();
 

  return (
    <>
      <CardWrapper>
        <h3></h3>
        {items.slice(0, 4).map((item) => (
          <StyledCard key={item._id}>
            <div>{item.title}</div>
            <div>{item.price} €</div>
            <div>{item.difficulty}</div>
            <div>{item.category}</div>
            <StyledImage
              onClick={()=> router.push(`/item-page/${item._id}`)}
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

export const CardWrapper = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledCard = styled.div`
  height: 40%;
  width: 40%;
  margin: 15px;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;
