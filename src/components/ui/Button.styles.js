import styled from 'styled-components';

import Link from 'next/link';

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
`;

export const Button = styled.button`
  transition-delay: 0.1s;
  font-size: 10pt;
  margin-top: 1.5rem;
  border-radius: 10rem;
  border: none;
  padding: 0.6rem 1rem;
  width: ${({ width }) => width || '100%'};
  background-color: black;
  color: ${({ color }) => (color ? 'white' : 'white')};
  &:hover,
  &:active,
  &:focus {
    background-color: white;
    color: black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export const LoginButton = styled.button`
  border: none;
  background: none;
  color: var(--first-color);
  &:active {
    color: black;
    font-size: 12pt;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
