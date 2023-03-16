import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";
import Button from "./Button";
import { ImageWrapper } from "./Collage";

export default function GoogleLogin() {
  const { data: session } = useSession();
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
        {/* <p>You are not signed in</p> */}
        <Button
          onClick={() => {
            signIn();
          }}
        >
          gmail test login
        </Button>
      </>
    );
  }
}
