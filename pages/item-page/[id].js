import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "@/components/Item";
import styled from "styled-components";
import Image from "next/image";

import Slider, { Slide } from "@/components/Slider";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { small_id } from "@/utils";


export default function PatternDetailsPage() {
  const [itemDetail, setItemDetail] = useState();
  const router = useRouter();
  const { id } = router.query;



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
      title,
      instructions,
      images,
      category,
      description,
      difficulty,
      price,
      _id,
    } = itemDetail;

    // if (isMutating) return <p>Submitting your changes</p>;
    return (
      <>
        {/* <Container>
          <ImageSlider images={images}></ImageSlider>
        </Container> */}
        <Slider
          settings={{
            navigation: true,
          }}
        >
          {images.map((image) => (
            <Slide key={small_id}>
              <img src={image} alt={image} />
            </Slide>
          ))}
        </Slider>
        <Item
          images={images}
          title={title}
          instructions={instructions}
          description={description}
          difficulty={difficulty}
          price={price}
          category={category}
          id={_id}
          onDeleteCard={handleDeleteCard}
          onUpdateCard={updateCards}
        />
      </>
    );
  }
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
`;
