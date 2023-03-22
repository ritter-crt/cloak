import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { StyledButton } from "./Button";
import { useRouter } from "next/router";

export default function Logout() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p>Welcome, {session.user.name}</p>

        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault()
            signOut();
          }}
        >
          Sign out
        </Link>
      </>
    );
  } else {
    return null;
  }
}
