import Link from 'next/link';

import styled from 'styled-components';

export const NavMenu = styled.ul`
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
    opacity: 70%;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 5%;
    right: 0;
    margin: 5px 0px;
    padding: 10px;
    height: fit-content;
    width: fit-content;
    transition: transform 0.3 ease-in-out;
  }
`;

export const NavLink = styled(Link)`
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
