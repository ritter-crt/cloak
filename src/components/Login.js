import { useSession, signOut, signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Button } from './ui/Button.styles';

export default function Login() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.push('/home');
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (session) {
    return (
      <>
        <p>Welcome, {session.user.name}</p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  } else {
    return (
      <>
        <p>See you soon!</p>
        <Button onClick={() => signIn()}>Login</Button>
      </>
    );
  }
}
