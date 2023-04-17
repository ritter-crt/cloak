import { device } from '@/src/styles';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useState } from 'react';

import { TfiClose, TfiCheck } from 'react-icons/tfi';

import { ThreeDots, Triangle } from 'react-loader-spinner';

export default function Modal({ closeModal, onDeleteCard, id }) {
  const router = useRouter();

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

const ModalContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  background-color: var(--background-color);
  box-shadow: rgba(0, 0, 0.35, 0.2) 0px 5px 10px;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Title = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const ModalButton = styled.button`
  margin-top: 40px;
  display: flex;
  height: 30px;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: var(--background-color);
  font-size: 10pt;
  &:hover {
    color: var(--first-color);
  }
`;

const YesIcon = styled(TfiCheck)`
  width: 15px;
  height: 15px;
  color: black;
  margin: 10px;
`;

const NoIcon = styled(TfiClose)`
  width: 15px;
  height: 15px;
  color: black;
  margin: 10px;
`;
