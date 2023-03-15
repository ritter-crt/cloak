import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p>Welcome, {session.user.name}</p>
        <StyledButton onClick={() => signOut()}>Sign out</StyledButton>
      </>
    );
    
  } else {
    return (
      <>
        <p>You are not signed in</p>
        <StyledButton onClick={() => {signIn()}}>Test login with Google</StyledButton>
      </>
    );
  }
}


const StyledButton = styled.button`
margin:50px;
`
