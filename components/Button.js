import Link from "next/link";
import styled from "styled-components";

export default function Button({ children }) {
  return <StyledLink href="/home">{children}</StyledLink>;
}

const StyledLink = styled(Link)`
  width: 50%;
  display: flex;
  flex-direction: row;
  color: black;
  margin: 10px;
  align-items: flex-end;
  /* justify-content: center; */
  margin-left: auto;
  /* padding: 10px; */
  /* background-color: black; */
  border-radius: 40px;
  text-decoration: none;
  &:active {
    background-color: white;
    color: black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
