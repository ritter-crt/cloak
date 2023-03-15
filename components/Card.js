import Image from "next/image";
import styled from "styled-components";

export default function Card({ items }) {
  return (
    <>
      <div>Hello there this will be changed soon!</div>
      <CardWrapper>
        {items.map((item) => (
          <div key={item._id}>
            <div>{item.price}</div>
            <div>{item.difficulty}</div>
            <div>{item.category}</div>
            <Image src={item.image} height={500} width={500} alt={item.title} />
          </div>
        ))}
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10rem;
`;
