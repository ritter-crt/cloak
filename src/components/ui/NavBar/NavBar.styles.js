import { device } from '@/src/styles';
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 20;
  margin-bottom: 1.2rem;
`;

export const NavLogo = styled(Link)`
  padding: 0.6rem;
  position: relative;
  left: 7%;
  width: fit-content;
  text-decoration: none;
  font-family: 'Golos Text', sans-serif;
  cursor: pointer;
  text-decoration: none;
  color: black;
  flex-grow: 1;
  @media ${device.tablet} {
    left: 3%;
  }
`;
