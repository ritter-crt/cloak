import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

import { ThreeDots, Triangle } from 'react-loader-spinner';

import styled from 'styled-components';
import { Text } from '@/src/components/styled';
import AuthForm from '../components/AuthForm';

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