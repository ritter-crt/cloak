import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Burger from "./Burger";
import HomeFilled from "@/src/assets/icons/home_filled.png";
import ProfileFilled from "@/src/assets/icons/profile_filled.png";
import AddFilled from "@/src/assets/icons/add_filled.png";
import SearchFilled from "@/src/assets/icons/search.png";
export default function RightNav({ open }) {
  return (
    <>
      <NavMenu open={open}>
        <li>
          <NavLink href="/home">
            {/* <Image src={HomeFilled} width="25" height="25" alt="home"></Image> */}
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/add">
            {/* <Image
              src={AddFilled}
              width="25"
              height="25"
              alt="add pattern"
            ></Image> */}
            Add
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/search">
            {/* <Image src={SearchFilled} width="25" height="25" alt="search" /> */}
            Search
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/profile">
            {/* <Image src={ProfileFilled} width="25" height="25" alt="home" /> */}
            Profile
          </NavLink>
        </li>
      </NavMenu>
    </>
  );
}

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  flex-flow: row nowrap;

  li {
    padding: 10px 10px;
  }
  @media (max-width: 768px) {
    /* display: none; */
    flex-flow: column nowrap;
    background-color: var(--background-color);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 5%;
    right: 0;
    height: 30vh;
    width: 30%;
    /* padding-top: 3.5rem; */
    transition: transform 0.3 ease-in-out;
  }
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  height: 100%;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 9pt;
  letter-spacing: 2pt;
  padding: 10px;

  &:hover {
    color: var(--first-color);
  }
`;
