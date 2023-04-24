import Link from 'next/link';

import styled from 'styled-components';

export const NavDiv = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--background-color);
  position: fixed;
  top: 0;
  opacity: 80%;
  z-index: 10;
`;
export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 0.5px solid black;
  padding-left: 10%;
  padding-right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2 rem;
  position: fixed;
  top: 0;
  z-index: 20;
  margin-bottom: 20px;
`;

export const NavLogo = styled(Link)`
  width: fit-content;
  text-decoration: none;
  font-family: 'Golos Text', sans-serif;
  cursor: pointer;
  text-decoration: none;
  color: black;
  flex-grow: 1;
`;
