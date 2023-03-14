import styled from "styled-components";

export default function Button() {
  return <StyledLink>get started</StyledLink>;
}

const StyledLink = styled.a`
  color: black;
  margin-top: 10px;
  align-items: flex-end;
  justify-content: center;
  margin-left: auto;
  padding: 10px;
  background-color: black;
  border-radius: 40px;
  color: white;
  &:active {
    background-color: white;
    color: black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
