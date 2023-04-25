import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useRouter } from 'next/router';
import { useState } from 'react';

import {
  BackIcon,
  Button,
  ButtonWrapper,
  DeleteIcon,
  EditIcon,
  StyledLink,
} from '@/src/components/common/Button.styles';

import EditForm from '../EditForm';
import Modal from '../Modal';
import Slider, { Slide } from '../Slider';
import { StyledTitle } from '../common/Text.styles';

export default function Item({
  itemDetail,
  onDeleteCard,
  onUpdateCard,
  session,
}) {
  const {
    title,
    description,
    instructions,
    difficulty,
    images,
    price,
    pattern,
    userId,
    id,
  } = itemDetail;

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
      title: formElements.title.value,
      category: formElements.category.value,
      description: formElements.description.value,
      difficulty: formElements.difficulty.value,
      instructions: formElements.instructions.value,
      price: formElements.price.value,
    };
    onUpdateCard(id, updatedCard);
    setIsEditing(false);
    router.push('/home');
  }

  return (
    <Wrapper>
      {isEditing && (
        <EditForm
          onSubmit={handleSubmit}
          onSelect={handleChange}
          onChange={handleChange}
          itemDetail={itemDetail}
        ></EditForm>
      )}
      {!isEditing && (
        <>
          <HeaderWrapper>
            <ButtonWrapper>
              <StyledTitle>{title}</StyledTitle>
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
          {session?.user.email === userId ? (
            <IconWrapper>
              <DeleteIcon
                onClick={() => {
                  setOpenModal(true);
                }}
              ></DeleteIcon>
              <EditIcon onClick={() => setIsEditing(true)}></EditIcon>
            </IconWrapper>
          ) : null}
          {openModal && (
            <Modal
              closeModal={setOpenModal}
              onDeleteCard={onDeleteCard}
              id={id}
            />
          )}
          {pattern ? (
            <Button width>
              <StyledLink target="_blank" href={pattern}>
                Download
              </StyledLink>
            </Button>
          ) : null}
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 3rem 2rem 7rem 2rem;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: solid 0.1px;
`;

const StyledText = styled.p`
  font-size: 12pt;
  font-family: 'Bodoni Moda', serif;
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

const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: flex-end;
`;
