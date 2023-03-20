import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledImage } from "@/components/styled";
import Button, { StyledButton } from "@/components/Button";
import useSWRMutation from "swr/mutation";
import Link from "next/link";
import ItemDetail from "@/components/ItemDetail";

export default function PatternDetailsPage() {
  const [itemDetail, setItemDetail] = useState();
  const router = useRouter();
  const { id } = router.query;

  const { trigger, isMutating } = useSWRMutation(
    `/api/items/${id}`,
    updateCards
  );

  function refreshPage() {
    const fetchData = async () => {
      const data = await fetch(`/api/items/${id}`);
      const items = await data.json();
      setItemDetail(items);
    };
    fetchData().catch(console.error);
  }

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
    refreshPage();
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
    const { title, instructions, image, description, difficulty, price, _id} =
      itemDetail;

  if (isMutating) return <p>Submitting your changes</p>;
  return (
    <>
      <ItemDetail
      image={image}
      title={title}
      instructions={instructions}
      description={description}
      difficulty={difficulty}
      price={price}
      id={_id}
      onDeleteCard={handleDeleteCard} onUpdateCard={updateCards}
       />
    </>
  );
  }
}