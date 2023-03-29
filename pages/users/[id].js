import { StyledButton } from "@/src/components/Button";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  StyledImage,
  StyledText,
  StyledTitle,
  TextWrapper,
} from "@/src/components/StyledCard";
import styled from "styled-components";
import { StyledLabel } from "@/src/components/StyledForm";

export default function User() {
  const { data: session, status } = useSession();
  const [items, setItems] = useState([]);
  const [user, setUser] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getItems() {
      try {
        const itemsData = await fetch("/api/items");
        const items = await itemsData.json();

        const filteredItems = items.filter((item) => {
          if (id === item.userId) {
            return item;
          }
        });
        setItems(filteredItems);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, [id]);

  useEffect(() => {
    async function getUser() {
      try {
        const usersData = await fetch(`/api/users/${id}`);
        const user = await usersData.json();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [id]);

  if (session) {
    return (
      <>
        <StyledLabel>Welcome, {session.user.name}.</StyledLabel>
        <PatternText>My patterns</PatternText>
        <ScrollingWrapper>
          {items
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((item) => (
              <Card key={item._id}>
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
              </Card>
            ))}
        </ScrollingWrapper>

        <StyledButton onClick={() => signOut()}>Sign out</StyledButton>
      </>
    );
  } else {
    return (
      <>
        <p>See you soon!</p>
        <StyledButton>Login</StyledButton>
      </>
    );
  }
}

const ScrollingWrapper = styled.div`
  margin-bottom: 20%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;
const Card = styled.div`
  display: inline-block;
  margin: 20px;
`;

const PatternText = styled.p`
  margin-top: 10%;
  margin-bottom: 10%;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 9pt;
  letter-spacing: 2pt;
`;
