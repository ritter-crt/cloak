import Image from "next/image";
import styled from "styled-components";

export default function Card({ items, search }) {
  // const keys = ["title", "category", "difficulty"];

  // // const searchItems = (items) => {
  // //   return items.filter(
  // //     (item) =>
  // //       item.title.toLowerCase().includes(search) ||
  // //       item.difficulty.toLowerCase().includes(search) ||
  // //       item.category.toLowerCase().includes(search)
  // //   );
  // // };

  // const searchItems = (items) => {
  //   return items.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(search))
  //   );
  // };

  return (
    <>
      <CardWrapper>
      <h3>some highlights picked for you</h3>
        {items.slice(0,4).map((item) => (
            <StyledCard key={item._id}>
              <div>{item.title}</div>
              <div>{item.price} €</div>
              <div>Difficulty: {item.difficulty}</div>
              <div>{item.category}</div>
              <StyledImage
                src={item.image}
                height={100}
                width={100}
                alt={item.title}
              />
            </StyledCard>
          ))
        }
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
