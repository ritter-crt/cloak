import styled, { css } from 'styled-components';

import Link from 'next/link';

import {
  RiDeleteBin7Line,
  RiEditBoxLine,
  RiArrowGoBackFill,
} from 'react-icons/ri';

import { MdOutlineCancelPresentation } from 'react-icons/md';

import { device } from '@/src/styles';

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
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
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

const stylesIcon = css`
  width: 30px;
  height: 30px;
  color: black;
  margin: 10px;
  &:hover {
    color: var(--first-color);
  }
`;

export const CancelButton = styled(MdOutlineCancelPresentation)`
  ${stylesIcon}
`;

export const DeleteIcon = styled(RiDeleteBin7Line)`
  ${stylesIcon}
`;

export const EditIcon = styled(RiEditBoxLine)`
  ${stylesIcon}
`;

export const BackIcon = styled(RiArrowGoBackFill)`
  ${stylesIcon}
`;
