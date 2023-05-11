import { useRouter } from 'next/router';
import { useSession, signOut, getSession } from 'next-auth/react';
import useSWR from 'swr';

import Card from '@/src/components/Card';

import { CardTitle } from '@/src/components/Card/Card.styles';
import { Button, StyledLink } from '@/src/components/ui/Button.styles';
import { StyledLabel } from '@/src/components/ui/Form.styles';
import { Title } from '@/src/components/ui/Text.styles';
import {
  ScrollingCard,
  ScrollingWrapper,
} from '@/src/components/ui/ScrollingCard.styles';

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

        <Button width="fit-content" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  } else {
    return (
      <>
        <CardTitle>See you back soon!</CardTitle>
        <Button
          width="fit-content"
          onClick={() => {
            router.push('/login');
          }}
        >
          Login
        </Button>
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
