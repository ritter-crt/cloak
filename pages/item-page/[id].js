import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledImage } from "@/components/styled";
import Button from "@/components/Button";
import Link from "next/link";

export default function PatternDetail() {
  const [itemDetail, setItemDetail] = useState();
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    if (id) {
      console.log("Oi");
      const fetchSpecificItem = async () => {
        const response = await fetch(`/api/items/${id}`);

        const specificItem = await response.json();
        setItemDetail(specificItem);
        console.log(specificItem);
      };
      fetchSpecificItem();
    }
  }, [id]);

  if (itemDetail) {
    const {
      title,
      instructions,
      image,
      category,
      description,
      difficulty,
      price,
    } = itemDetail;

    console.log("SPECIFIC: ", itemDetail);

    return (
      <Container>
        <StyledTitle>{title}</StyledTitle>
        <StyledImage
          src={image}
          width="300"
          height="300"
          alt={title}
        ></StyledImage>
        <StyledText> {description}</StyledText>
        <StyledText> {difficulty}</StyledText>
        <StyledDescription> {instructions}</StyledDescription>
        <StyledPrice> {price}€</StyledPrice>
        <Button>buy</Button>
        <Link href="/home">
          <Button>back</Button>
        </Link>
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
  margin: 10%;
  justify-content: center;
`;

const StyledTitle = styled.p`
  text-transform: uppercase;
  font-size: 16pt;
  font-weight: 250;
`;

const StyledText = styled.p`
  font-size: 12pt;
`;

const StyledDescription = styled.p`
  line-height: 1.3rem;
  font-size: 10pt;
`;
const StyledPrice = styled.p`
  padding: 10px;
  align-items: flex-end;
`;
