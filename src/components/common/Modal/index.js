import { useRouter } from 'next/router';

import styled from 'styled-components';
import {
  Body,
  ModalButton,
  ModalContainer,
  NoIcon,
  Title,
  YesIcon,
} from './Modal.styles';

export default function Modal({ closeModal, onDeleteCard, id }) {
  return (
    <>
      <ModalContainer className="modalContainer">
        <Title className="title">
          Are you sure you want to delete this entry?
        </Title>
        <Body>
          <>
            <ModalButton onClick={() => closeModal(false)}>
              no, take me back <NoIcon />
            </ModalButton>
            <ModalButton
              onClick={() => {
                onDeleteCard(id);
              }}
            >
              yes, please <YesIcon />
            </ModalButton>
          </>
        </Body>
      </ModalContainer>
    </>
  );
}
