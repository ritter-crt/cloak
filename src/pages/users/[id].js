import { useRouter } from 'next/router';

import { useSession, signOut, getSession } from 'next-auth/react';

import useSWR from 'swr';

import {
  StyledImage,
  CardTitle,
  ScrollingWrapper,
  ScrollingCard,
  CardContent,
  CardImage,
  CardWrapper,
} from '@/src/components/common/Card.styles';

import { Button, StyledLink } from '@/src/components/common/Button.styles';

import { StyledLabel } from '@/src/components/common/Form.styles';
import { Title } from '@/src/components/common/Text.styles';
import styled from 'styled-components';
import Card from '@/src/components/Card';

export default function User() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data: session, status } = useSession();
  const id = session?.user?.email;
  // console.log("___________id", session);

  const { data: itemList } = useSWR(`api/users/${id}`, fetcher);
  // console.log("___________ITEMLIST", itemList);

  const router = useRouter();

  if (session && itemList) {
    return (
      <>
        <StyledLabel>Welcome, {session.user.name}.</StyledLabel>
        <Title>Your patterns</Title>
        <ScrollingWrapper>
          {itemList
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((item) => (
              <ScrollingCard margin="0.5rem" key={item._id}>
                <Card item={item}></Card>
              </ScrollingCard>
            ))}
        </ScrollingWrapper>

        <Button width onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  } else {
    return (
      <>
        <CardTitle>See you back soon!</CardTitle>
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
