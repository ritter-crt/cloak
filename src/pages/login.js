import styled from 'styled-components';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

import { ThreeDots } from 'react-loader-spinner';

import AuthForm from '../components/AuthForm';
import { Text } from '../components/ui/Text.styles';

export default function Auth() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/home');
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return (
      <>
        <title>Login</title>
        <LoadingWrapper>
          <Text>Loading</Text>
          <ThreeDots color="#2874FC" visible={true}>
            Loading
          </ThreeDots>
        </LoadingWrapper>
      </>
    );
  }

  return <AuthForm />;
}

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;
