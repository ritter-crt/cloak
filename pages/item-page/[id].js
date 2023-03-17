import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    const { title, pattern, image, category, description, difficulty } =
      itemDetail;

    console.log("SPECIFIC: ", itemDetail);

    return (
      <Container>
        <section className="patternDetails">
          <h1>{title}</h1>
          <p> {category}</p>
          <p> {description}</p>
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
  padding-top: 300px;
`;
