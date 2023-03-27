import { useSession, signIn, signOut } from "next-auth/react";
import { StyledButton } from "./Button";

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
        <p>See you soon!</p>
        <StyledButton
          onClick={() => {
            signIn();
          }}
        >
          Login
        </StyledButton>
      </>
    );
  }
}
