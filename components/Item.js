import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { small_id } from "@/utils";
import { StyledButton } from "@/components/Button";

import Slider, { Slide } from "@/components/Slider";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { HeaderWrapper, StyledHeader } from "./styled";
export default function Item({
  title,
  instructions,
  images,
  category,
  description,
  difficulty,
  price,
  id,
  onDeleteCard,
  onUpdateCard,
}) {
  console.log(images);
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [, setInputField] = useState();
  const handleChange = (event) => {
    const value = event.target.value;
    setInputField(value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const updatedCard = {
      image: formElements.image.value,
      title: formElements.title.value,
      category: formElements.category.value,
      description: formElements.description.value,
      difficulty: formElements.difficulty.value,
      instructions: formElements.instructions.value,
      pattern: formElements.pattern.value,
      price: formElements.price.value,
    };
    onUpdateCard(id, updatedCard);
    setIsEditing(false);
    console.log(updatedCard);
  }
  return (
    <Container>
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="image">upload image</label>
          <input id="image" name="image"></input>
          <label htmlFor="pattern">upload pdf</label>
          <input id="pattern" name="pattern"></input>
          <label htmlFor="title">title</label>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={title}
            onChange={handleChange}
          ></input>
          <label htmlFor="description"></label>
          <input
            id="description"
            name="description"
            placeholder="e.g occasion, season"
            defaultValue={description}
            onChange={handleChange}
          ></input>
          <label htmlFor="category">category</label>
          <select
            name="category"
            id="category"
            defaultValue={category}
            onSelect={handleChange}
          >
            <option value="tops">tops</option>
            <option value="bottoms">bottoms</option>
            <option value="onesie">onesie</option>
            <option value="accessories">accessories</option>
          </select>
          <label htmlFor="difficulty">difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            defaultValue={difficulty}
            onSelect={handleChange}
          >
            <option value="beginner">beginner</option>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="intermediate">intermediate</option>
            <option value="expert">expert</option>
          </select>
          <label htmlFor="instructions">instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            rows="5"
            placeholder="e.g preferred fabric, what you need"
            defaultValue={instructions}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="price">price</label>
          <input
            id="price"
            name="price"
            type="number"
            defaultValue={price}
            onChange={handleChange}
          ></input>
          <button>save changes</button>
        </form>
      )}
      {!isEditing && (
        <>
          <HeaderWrapper>
            <StyledTitel>{title}</StyledTitel>
          </HeaderWrapper>
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
          <StyledText>{description}</StyledText>
          <StyledText> {difficulty}</StyledText>
          <StyledDescription> {instructions}</StyledDescription>
          <StyledPrice> {price}€</StyledPrice>
          <StyledButton>buy</StyledButton>
          <Link href="/home">
            <StyledButton>back</StyledButton>
          </Link>
          <StyledButton
            onClick={() => {
              onDeleteCard(id);
              router.push("/home");
            }}
          >
            remove
          </StyledButton>
          <StyledButton onClick={() => setIsEditing(true)}>edit</StyledButton>
        </>
      )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10%;
  justify-content: center;
`;
const StyledTitle = styled.p`
  text-transform: uppercase;
  font-size: 16pt;
  font-weight: 250;
`;
const StyledText = styled.p`
  font-size: 12pt;
  font-family: "Bodoni Moda", serif;
  font-weight: 100;
`;
const StyledDescription = styled.p`
  line-height: 1.3rem;
  font-size: 10pt;
`;
const StyledPrice = styled.p`
  padding: 10px;
  align-items: flex-end;
`;

const StyledTitel = styled.p`
  font-size: 16pt;
  font-family: "Bodoni Moda", serif;
  font-weight: 100;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 20px;
`;
