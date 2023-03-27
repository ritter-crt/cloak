import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { small_id } from "@/utils";
import { StyledButton } from "@/components/Button";
import {
  RiDeleteBinLine,
  RiPencilLine,
  RiCheckboxCircleLine,
  BiArrowBack,
  FaCcPaypal,
} from "react-icons/ri";

import Slider, { Slide } from "@/components/Slider";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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
    <ItemWrapper>
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
            <Link href="/home">
              <StyledButton>cancel</StyledButton>
            </Link>
          </EntryForm>
        )}
        {!isEditing && (
          <>
            <HeaderWrapper>
              <StyledTitel>{title}</StyledTitel>
              <StyledText>{description}</StyledText>
            </HeaderWrapper>

            <StyledLevel>{difficulty}</StyledLevel>
            <Slider
              settings={{
                navigation: true,
              }}
            >
              {images.map((image, small_id) => (
                <Slide key={small_id}>
                  <img key={small_id} src={image} alt={image} />
                </Slide>
              ))}
            </Slider>
            <StyledDescription> {instructions}</StyledDescription>
            <StyledPrice>{price}€</StyledPrice>
            <div>
              <StyledButton>buy</StyledButton>
              <Link href="/home">
                <StyledButton>back</StyledButton>
              </Link>

              <DeleteButton
                onClick={() => {
                  if (
                    window.confirm("Are you sure you wish to delete this item?")
                  );
                  onDeleteCard(id);
                  router.push("/home");
                }}
              >
                <StyledSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </StyledSvg>
              </DeleteButton>

              {/* <StyledButton
              onClick={() => {
                onDeleteCard(id);
                router.push("/home");
              }}
            >
              remove
            </StyledButton> */}
              <StyledButton onClick={() => setIsEditing(true)}>
                edit
              </StyledButton>
            </div>
          </>
        )}
      </Container>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 20%;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: solid 0.1px;
`;
const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
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
  line-height: 1.5rem;
  font-size: 10pt;
  padding: 20px;
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

const DeleteButton = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 25px;
  background-color: var(--background-color);
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 0.3s;
  }
`;

const StyledSvg = styled.svg`
  color: var(--first-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
`;
