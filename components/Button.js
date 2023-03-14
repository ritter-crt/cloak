import Link from "next/link";
import styled from "styled-components";

export default function Button() {
  return <StyledLink href="/home">get started</StyledLink>;
}

const StyledLink = styled(Link)`
  color: black;
  margin-top: 10px;
  align-items: flex-end;
  justify-content: center;
  margin-left: auto;
  padding: 10px;
  background-color: black;
  border-radius: 40px;
  color: white;
  text-decoration: none;
  &:active {
    background-color: white;
    color: black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
