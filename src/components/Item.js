import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useRouter } from 'next/router';
import { useState } from 'react';

import EditForm from './EditForm';
import Slider, { Slide } from './Slider';

import {
  Button,
  StyledLink,
  ButtonWrapper,
} from '@/src/components/ui/Button.styles';

import {
  Description,
  Instruction,
  Difficulty,
  Price,
  Title,
} from './ui/Text.styles';
import { ContentWrapper, HeaderWrapper } from './ui/Wrapper.styles';

import { BackIcon, DeleteIcon, EditIcon, IconWrapper } from './ui/Icon.styles';
import Modal from './Modal';
import Image from 'next/image';

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
    <ContentWrapper margin>
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
          <div>
            <ButtonWrapper>
              <Title fontSize="16pt">{title}</Title>
              <BackIcon
                onClick={() => {
                  router.back();
                }}
              ></BackIcon>
            </ButtonWrapper>
          </div>
          <Difficulty>{difficulty}</Difficulty>
          <Slider
            settings={{
              navigation: true,
            }}
          >
            {images.map((image, small_id) => (
              <Slide key={small_id}>
                <Image
                  layout="responsive"
                  width={500}
                  height={500}
                  key={small_id}
                  src={image}
                  alt={image}
                />
              </Slide>
            ))}
          </Slider>
          <Description>{description}</Description>
          <Instruction> {instructions}</Instruction>
          <Price>{price}€</Price>
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
            <Button>
              <StyledLink target="_blank" href={pattern}>
                Download
              </StyledLink>
            </Button>
          ) : null}
        </>
      )}
    </ContentWrapper>
  );
}
