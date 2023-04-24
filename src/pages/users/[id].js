import { Button, StyledLink } from '@/src/components/common/Button.styles';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import {
  StyledImage,
  StyledText,
  StyledTitle,
  TextWrapper,
} from '@/src/components/common/StyledCard';
import styled from 'styled-components';
import { StyledLabel } from '@/src/components/StyledForm';
import Link from 'next/link';
import useSWR from 'swr';
import { StyledHeader } from '@/src/components/styled';

export default function User() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data: session, status } = useSession();
  const id = session?.user?.email;
  // console.log("___________ididididididid", session);

  const { data: itemList } = useSWR(`api/users/${id}`, fetcher);
  // console.log("HELOOOOOOOOOOOO ITEM", itemList);

  const router = useRouter();

  if (session && itemList) {
    return (
      <>
        <StyledLabel>Welcome, {session.user.name}.</StyledLabel>
        <Text>My patterns</Text>
        <ScrollingWrapper>
          {itemList
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

        <Button float onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  } else {
    return (
      <>
        <ByeText>See you back soon!</ByeText>
        <StyledLink href="/login">
          <Button float>Login</Button>
        </StyledLink>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

const ScrollingWrapper = styled.div`
  margin-bottom: 40%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;
const Card = styled.div`
  display: inline-block;
  margin: 20px;
`;

const Text = styled.p`
  margin-top: 10%;
  margin-bottom: 10%;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 9pt;
  letter-spacing: 2pt;
`;

const ByeText = styled.p`
  margin-top: 10%;
  margin-bottom: 50%;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 13pt;
  letter-spacing: 2pt;
`;
