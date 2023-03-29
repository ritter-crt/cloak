import { device } from "@/styles";
import { useRouter } from "next/router";
import styled from "styled-components";

import { TfiClose, TfiCheck } from "react-icons/tfi";

export default function Modal({ closeModal, onDeleteCard, id }) {
  //change value based on ButtonClick

  const router = useRouter();

  return (
    <>
      <ModalContainer className="modalContainer">
        <Title className="title">
          Are you sure you want to delete this entry?
        </Title>
        <Body>
          <ModalButton onClick={() => closeModal(false)}>
            no <NoIcon />
          </ModalButton>
          <ModalButton
            onClick={() => {
              onDeleteCard(id);
              router.push("/home");
            }}
          >
            yes, please <YesIcon />
          </ModalButton>
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
  padding: 25px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Title = styled.div`
  font-weight: 100;
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
  font-size: 11pt;
  &:hover {
    color: var(--first-color);
  }
`;

const YesIcon = styled(TfiCheck)`
  width: 20px;
  height: 20px;
  color: black;
  margin: 10px;
`;

const NoIcon = styled(TfiClose)`
  width: 18px;
  height: 18px;
  color: black;
  margin: 10px;
`;
