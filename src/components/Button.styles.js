import Link from 'next/link';

import { device } from '@/src/styles';

import styled from 'styled-components';
/* GENERATED CONTENT */
/* POSITION AND LAYOUT */
/* DISPLAY AND VISIBILITY*/
/* CLIPPING */
/* ANIMATION */
/* BOX MODEL */
/* BACKGROUND */
/* TYPOGRAPHY */
/* PSEUDO-CLASSES */

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  //_______POSITION AND LAYOUT
  float: ${(props) => (props.float ? 'right' : 'none')};
  //_______ANIMATION
  transition-delay: 0.1s;
  font-size: 10pt;
  //_______BOX MODEL (FROM OUTSIDE IN)
  margin-top: 1.5rem;
  border-radius: 10rem;
  border: none;
  padding: 0.6rem 1rem;
  width: ${(props) => (props.width ? 'fit-content' : '40%')};
  //_______BACKGROUND
  background-color: black;
  //_______TYPOGRAPHY
  color: ${(props) => (props.color ? 'white' : 'white')};
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
