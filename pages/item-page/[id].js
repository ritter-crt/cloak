import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

// export default function Item() {
//   return <h1>Hi</h1>;
// }

export default function PatternDetail() {
  const [itemDetail, setItemDetail] = useState();
  const router = useRouter();
  const { id } = router.query;
  console.log(id)

  useEffect(() => {
    if(id) {
    console.log("Oi");
    const fetchSpecificItem = async () => {
      const response = await fetch(`/api/items/${id}`);
      
      const specificItem = await response.json();
      setItemDetail(specificItem);
      console.log(specificItem);
    };
    fetchSpecificItem();
  }}, 
  [id]);

  if (itemDetail) {
    const { title, instructions, image, category, description, difficulty, price } =
      itemDetail;

    console.log("SPECIFIC: ", itemDetail);

    return (
      <Container>
        <section>
        <Image src={image} width="200" height="200" alt={title}></Image>
          <h1>{title}</h1>
          <p> {category}</p>
          <p> {description}</p>
          <p> {difficulty}</p>
          <p> {instructions}</p>
          <p> {price}</p>
        </section>
      </Container>
    );
  }
  return (
    <>
      <h1>Loading</h1>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;
