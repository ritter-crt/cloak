import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./Button";

export default function Modal({ closeModal, onDeleteCard, id }) {
  //change value based on ButtonClick

  const router = useRouter();

  return (
    <ModalBackground>
      <ModalContainer className="modalContainer">
        <Title className="title">
          Are you sure you want to delete this entry?
        </Title>
        <div className="body">
          <p></p>
        </div>
        <div className="footer">
          <StyledButton onClick={() => closeModal(false)}>no</StyledButton>
          <StyledButton
            onClick={() => {
              onDeleteCard(id);
              router.push("/home");
            }}
          >
            yes
          </StyledButton>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  background-color: var(--background-color);
  box-shadow: rgba(0, 0, 0.35, 0.2) 0px 5px 10px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Title = styled.div`
  font-weight: 500;
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;
