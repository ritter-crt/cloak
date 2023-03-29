import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "@/src/components/Item";
import { useSession } from "next-auth/react";

export default function PatternDetailsPage() {
  const [itemDetail, setItemDetail] = useState();
  const router = useRouter();
  const { id } = router.query;

  const { data: session, status } = useSession();

  async function updateCards(id, body) {
    const response = await fetch(`/api/items/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  async function handleDeleteCard() {
    const response = await fetch(`/api/items/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await response.json();
      console.log("routerID", id);
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  useEffect(() => {
    if (id) {
      const fetchSpecificItem = async () => {
        const response = await fetch(`/api/items/${id}`);
        const specificItem = await response.json();
        setItemDetail(specificItem);
        console.log(specificItem);
      };
      fetchSpecificItem();
    }
  }, [id]);
  if (itemDetail) {
    const {
      user,
      userId,
      title,
      pattern,
      instructions,
      images,
      category,
      description,
      difficulty,
      price,
      _id,
    } = itemDetail;

    return (
      <>
        <Item
          key={_id}
          images={images}
          pattern={pattern}
          title={title}
          instructions={instructions}
          description={description}
          difficulty={difficulty}
          price={price}
          category={category}
          id={_id}
          onDeleteCard={handleDeleteCard}
          onUpdateCard={updateCards}
          userId={userId}
          user={user}
          session={session}
        />
      </>
    );
  }
}
