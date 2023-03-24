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

import { HeaderWrapper } from "./styled";
import {
  EntryForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTextarea,
} from "./StyledForm";

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
        <EntryForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="title">title</StyledLabel>
          <StyledInput
            id="title"
            name="title"
            type="text"
            defaultValue={title}
            onChange={handleChange}
          ></StyledInput>
          <StyledLabel htmlFor="description"></StyledLabel>
          <StyledInput
            id="description"
            name="description"
            placeholder="e.g occasion, season"
            defaultValue={description}
            onChange={handleChange}
          ></StyledInput>
          <StyledLabel htmlFor="category">category</StyledLabel>
          <StyledSelect
            name="category"
            id="category"
            defaultValue={category}
            onSelect={handleChange}
          >
            <option value="tops">tops</option>
            <option value="bottoms">bottoms</option>
            <option value="onesie">onesie</option>
            <option value="accessories">accessories</option>
          </StyledSelect>
          <StyledLabel htmlFor="difficulty">difficulty</StyledLabel>
          <StyledSelect
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
          </StyledSelect>
          <StyledLabel htmlFor="instructions">instructions</StyledLabel>
          <StyledTextarea
            id="instructions"
            name="instructions"
            rows="5"
            placeholder="e.g preferred fabric, what you need"
            defaultValue={instructions}
            onChange={handleChange}
          ></StyledTextarea>
          <StyledLabel htmlFor="price">price</StyledLabel>
          <StyledInput
            id="price"
            name="price"
            type="number"
            defaultValue={price}
            onChange={handleChange}
          ></StyledInput>
          <StyledButton>save changes</StyledButton>
        </EntryForm>
      )}
      {!isEditing && (
        <>
          <HeaderWrapper>
            <StyledTitel>{title}</StyledTitel>
            <StyledText>{description}</StyledText>
          </HeaderWrapper>
          <StyledLevel> {difficulty}</StyledLevel>
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
          <StyledDescription> {instructions}</StyledDescription>
          <StyledPrice>{price}€</StyledPrice>
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

const StyledText = styled.p`
  font-size: 12pt;
  font-family: "Bodoni Moda", serif;
  font-weight: 100;
`;

const StyledLevel = styled.p`
  font-size: 10pt;
  font-weight: 100;
  text-align: right;
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
