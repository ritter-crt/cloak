import Link from "next/link";
import styled from "styled-components";
import Burger from "./Burger";

export default function RightNav({ open }) {
  return (
    <>
      <NavMenu open={open}>
        {/* <NavContainer> */}
        <li>
          <NavLink href="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/add">Add</NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/search">Search</NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/profile">Profile</NavLink>
        </li>
        {/* </NavContainer> */}
      </NavMenu>
    </>
  );
}

// const NavContainer = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 80px;
// `;

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

    li {
      color: black;
    }
  }
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  height: 100%;
  font-family: "Golos Text", sans-serif;
  text-transform: lowercase;
  font-weight: 100;

  &:hover {
    color: var(--first-color);
  }
`;
