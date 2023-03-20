import HomeFilled  from "@/src/assets/icons/home_filled.png";
import ProfileFilled from "@/src/assets/icons/profile_filled.png";
import AddFilled from "@/src/assets/icons/add_filled.png";
import SearchFilled from "@/src/assets/icons/search.png";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <NavWrapper>
        <StyledLink href="/home">
          <Image src={HomeFilled} width="30" height="30" alt="home" />
        </StyledLink>

        <StyledLink href="/search">
          <Image src={SearchFilled} width="30" height="30" alt="search" />
        </StyledLink>

        <StyledLink href="/add">
          <Image src={AddFilled} width="30" height="30" alt="add pattern" />
        </StyledLink>

        <StyledLink href="/profile">
          <Image src={ProfileFilled} width="30" height="30" alt="home" />
        </StyledLink>
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
  width: 100%;
  box-shadow: 0px -5px 5px -6px rgba(0,0,0,0.29)

`;

const StyledLink = styled(Link)`
  padding: 1rem;
  opacity: 50%;
`;
