import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledImage } from "@/components/styled";
import Button, { StyledButton } from "@/components/Button";
import Link from "next/link";

export default function ItemDetail({
  title,
  instructions,
  image,
  description,
  difficulty,
  price,
  id,
  onSubmitCard,
  onDeleteCard,
}) {
  const router = useRouter();

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
      <StyledButton>buy</StyledButton>
      <Link href="/home">
        <StyledButton>back</StyledButton>
      </Link>
      <StyledButton
        onClick={() => {
          onDeleteCard(id);
          router.push("/home");
        }}
      >
        remove
      </StyledButton>
    </Container>
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
