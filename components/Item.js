import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { StyledButton } from "@/components/Button";

import {
  RiDeleteBin7Line,
  RiEditBoxLine,
  RiCheckboxLine,
  RiArrowGoBackFill,
} from "react-icons/ri";
import { MdOutlineCancelPresentation } from "react-icons/md";

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
      {isEditing && (
        <EntryForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="image">upload image</StyledLabel>
          <StyledInput id="image" name="image"></StyledInput>

          <StyledLabel htmlFor="pattern">upload pdf</StyledLabel>
          <StyledInput id="pattern" name="pattern"></StyledInput>
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

          {/* <SaveButton></SaveButton> */}
          <StyledButton onClick={() => router.push("/home")}>
            safe changes
          </StyledButton>
          <Link href="/home">
            <CancelButton></CancelButton>
          </Link>
        </EntryForm>
      )}
      {!isEditing && (
        <>
          <HeaderWrapper>
            <ButtonWrapper>
              <StyledTitel>{title}</StyledTitel>
              <Link href="/home">
                <BackIcon></BackIcon>
              </Link>
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
          <IconWrapper>
            <DeleteIcon
              onClick={() => {
                if (
                  window.confirm("Are you sure you wish to delete this item?")
                );
                onDeleteCard(id);
                router.push("/home");
              }}
            ></DeleteIcon>
            <EditIcon onClick={() => setIsEditing(true)}>edit</EditIcon>
          </IconWrapper>
          <StyledButton>buy</StyledButton>
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
const SaveButton = styled(RiCheckboxLine)`
  width: 30px;
  height: 30px;
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
