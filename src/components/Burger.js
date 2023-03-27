import styled from "styled-components";
import { useState } from "react";
import RightNav from "./RightNavBar";

export default function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 40%;
`;

const StyledBurger = styled.div`
  width: 20px;
  height: 30px;
  position: fixed;
  top: 15px;
  right: 10%;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  display: none;

  @media (max-width: 769px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.1rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 0.5px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translate(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
