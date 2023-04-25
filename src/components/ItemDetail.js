import styled from 'styled-components';
import Modal from './Modal';
import Slider, { Slide } from './Slider';
import { Button, StyledLink } from './common/Button.styles';
import {
  RiDeleteBin7Line,
  RiEditBoxLine,
  RiArrowGoBackFill,
} from 'react-icons/ri';
import { MdOutlineCancelPresentation } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ItemDetail({
  title,
  description,
  difficulty,
  instructions,
  images,
  price,
  session,
  openModal,
  setOpenModal,
  userId,
  pattern,
  onDeleteCard,
  id,
}) {
  return (
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
        <Modal closeModal={setOpenModal} onDeleteCard={onDeleteCard} id={id} />
      )}
      {pattern ? (
        <Button width>
          <StyledLink target="_blank" href={pattern}>
            Download
          </StyledLink>
        </Button>
      ) : null}
    </>
  );
}

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
const StyledTitel = styled.p`
  font-size: 16pt;
  font-family: 'Bodoni Moda', serif;
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

// const CancelButton = styled(MdOutlineCancelPresentation)`
//   width: 30px;
//   height: 30px;
//   color: black;
//   margin: 10px;
//   &:hover {
//     color: var(--first-color);
//   }
// `;
const BackIcon = styled(RiArrowGoBackFill)`
  width: 20px;
  height: 20px;
  color: black;
  margin: 10px;
  &:hover {
    color: var(--first-color);
  }
`;
