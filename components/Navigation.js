import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <NavWrapper>
      <StyledLink href="/home">home</StyledLink>
      <StyledLink href="/search">search</StyledLink>
      <StyledLink href="/form">add</StyledLink>
      <StyledLink href="/profile">profile</StyledLink>
      </NavWrapper>
    </>
  );
}

const NavWrapper = styled.nav`
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  position: fixed;
  background-color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  width: 100%;
  text-decoration: none;
`;


const StyledLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  text-transform: lowercase;
  color: black;
  padding:1rem;
`;