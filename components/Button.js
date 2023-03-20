import Link from "next/link";
import styled from "styled-components";

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  width: 50%;
  display: flex;
  flex-direction: row;
  color: white;
  margin: 2px;
  align-items: flex-end;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  padding: 10px;
  background-color: black;
  border-radius: 40px;
  border: none;
  transition-delay: 0.3s;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export default function StyledLink({ children }) {
  return <StyledButton>{children}</StyledButton>;
}