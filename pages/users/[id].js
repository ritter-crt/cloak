import { StyledButton } from "@/src/components/Button";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function User() {
  const { data: session, status } = useSession();
  const [items, setItems] = useState([]);
  const [user, setUser] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getItems() {
      try {
        const itemsData = await fetch("/api/items");
        const items = await itemsData.json();

        const filteredItems = items.filter((item) => {
          if (id === item.userId) {
            return item;
          }
        });
        setItems(filteredItems);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, [id]);

  useEffect(() => {
    async function getUser() {
      try {
        const usersData = await fetch(`/api/users/${id}`);
        const user = await usersData.json();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [id]);

  if (session) {
    return (
      <>
        <p>Welcome, {session.user.name}</p>
        <div></div>
        <StyledButton onClick={() => signOut()}>Sign out</StyledButton>
      </>
    );
  } else {
    return (
      <>
        <p>See you soon!</p>
        <StyledButton>Login</StyledButton>
      </>
    );
  }
}
