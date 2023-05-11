// import { changeOpacity, device } from '@/src/styles';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const StyledHeader = styled.h1`
  font-family: 'Golos Text', sans-serif;

  animation-duration: 6s;
  animation-iteration-count: 1;
  font-weight: 30;
  font-size: 60pt;
  text-transform: lowercase;
  letter-spacing: 0.5rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255);
  z-index: 1;
`;

export const GetStarted = styled(Link)`
  background-color: black;
  color: white;
  text-decoration: none;
  position: absolute;
  top: 10px;
  right: 2%;
  z-index: 2;
  width: fit-content;
  margin: 2px;
  align-items: flex-end;
  text-align: center;
  padding: 5px 20px 5px 20px;
  border-radius: 40px;
  border: none;
  transition-delay: 0.1s;
  font-size: 6pt;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
export const StyledText = styled.div`
  padding: 10% 10% 5%;
  width: 100%;
  letter-spacing: 0.05rem;
  line-height: 1.2rem;
  font-size: 10pt;
`;

export const StyledImage = styled(Image)`
  animation-duration: 6s;
  animation-iteration-count: 1;
  object-fit: cover;
  width: 100%;
  position: relative;
  height: unset;
`;
