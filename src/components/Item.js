import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { StyledButton, StyledLink } from "@/src/components/Button";

import {
  RiDeleteBin7Line,
  RiEditBoxLine,
  RiArrowGoBackFill,
} from "react-icons/ri";
import { MdOutlineCancelPresentation } from "react-icons/md";

import Slider, { Slide } from "@/src/components/Slider";

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

import { categoryArray, difficultyArray } from "@/utils";
import Modal from "./Modal";

export default function Item({
  title,
  instructions,
  pattern,
  images,
  category,
  description,
  difficulty,
  price,
  id,
  onDeleteCard,
  onUpdateCard,
  userId,
  user,
  session,
}) {
  // console.log(images);
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

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
      // image: formElements.image.value,
      // pattern: formElements.pattern.value,
      title: formElements.title.value,
      category: formElements.category.value,
      description: formElements.description.value,
      difficulty: formElements.difficulty.value,
      instructions: formElements.instructions.value,
      price: formElements.price.value,
    };
    onUpdateCard(id, updatedCard);
    setIsEditing(false);
    router.push("/home");
    // console.log(updatedCard);
  }

  return (
    <ItemWrapper>
      {isEditing && (
        <EntryForm onSubmit={handleSubmit}>
          {/* <StyledLabel htmlFor="image">upload image</StyledLabel>
          <StyledInput id="image" name="image"></StyledInput>

          <StyledLabel htmlFor="pattern">upload pdf</StyledLabel>
          <StyledInput id="pattern" name="pattern"></StyledInput> */}
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
            {categoryArray &&
              categoryArray.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </StyledSelect>
          <StyledLabel htmlFor="difficulty">difficulty</StyledLabel>
          <StyledSelect
            name="difficulty"
            id="difficulty"
            defaultValue={difficulty}
            onSelect={handleChange}
          >
            {difficultyArray &&
              difficultyArray.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
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
          <StyledButton>safe changes</StyledButton>
          <CancelButton
            onClick={() => {
              router.back();
            }}
          ></CancelButton>
        </EntryForm>
      )}
      {!isEditing && (
        <>
          <HeaderWrapper>
            <ButtonWrapper>
              <StyledTitel>{title}</StyledTitel>
              <BackIcon
                onClick={() => {
                  router.back();
                }}
              ></BackIcon>
            </ButtonWrapper>
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
          {session?.user.id === userId ? (
            <IconWrapper>
              <DeleteIcon
                onClick={() => {
                  setOpenModal(true);
                }}
              ></DeleteIcon>
              <EditIcon onClick={() => setIsEditing(true)}>edit</EditIcon>
            </IconWrapper>
          ) : null}
          {openModal && (
            <Modal
              closeModal={setOpenModal}
              onDeleteCard={onDeleteCard}
              id={id}
            />
          )}
          <StyledButton>
            <StyledLink target="_blank" href={pattern}>
              Download
            </StyledLink>
          </StyledButton>
        </>
      )}
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
  padding: 5%;
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
const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: flex-end;
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
`;
const DeleteIcon = styled(RiDeleteBin7Line)`
  width: 20px;
  height: 20px;
  color: black;
  margin: 10px;
  &:hover {
    color: var(--first-color);
  }
`;
const EditIcon = styled(RiEditBoxLine)`
  width: 20px;
  height: 20px;
  color: black;
  margin: 10px;
  &:hover {
    color: var(--first-color);
  }
`;

const CancelButton = styled(MdOutlineCancelPresentation)`
  width: 30px;
  height: 30px;
  color: black;
  margin: 10px;
  &:hover {
    color: var(--first-color);
  }
`;
const BackIcon = styled(RiArrowGoBackFill)`
  width: 20px;
  height: 20px;
  color: black;
  margin: 10px;
  &:hover {
    color: var(--first-color);
  }
`;
