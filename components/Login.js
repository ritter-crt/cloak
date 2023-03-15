import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p>Welcome, {session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
    
  } else {
    return (
      <>
        <p>You are not signed in</p>
        <button onClick={() => signIn()}>Test login with Google</button>
      </>
    );
  }
}
