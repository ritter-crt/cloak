import { device } from '@/src/styles';

import Image from 'next/image';
import styled from 'styled-components';

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const StyledTitle = styled.p`
  text-transform: uppercase;
  font-size: 9pt;
  font-weight: 250;
  margin-top: 6px;
  margin-bottom: 4px;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  border-start-end-radius: 4px;
  border-start-start-radius: 4px;
  padding: 10px 10px;
  outline: none;
  background-color: rgba(0, 0, 0, 0.05);

  @media ${device.mobileL} {
    padding-top: 1px;
  }
`;
export const Text = styled.p`
  margin-top: 10%;
  margin-bottom: 5%;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 9pt;
  letter-spacing: 2pt;
  flex-wrap: wrap;
`;
export const StyledHeader = styled.h1`
  position: absolute;
  top: 11%;
  font-size: 18pt;
  font-family: 'Bodoni Moda', serif;
  font-weight: 100;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 0%;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 15%;
  /* border-bottom: solid 0.1px; */
`;
