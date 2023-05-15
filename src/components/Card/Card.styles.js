import styled from 'styled-components';
import Image from 'next/image';
import { changeOpacity, device } from '@/src/styles';

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  column-gap: 5%;
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    column-gap: 5%;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 250px;
  @media ${device.tablet} {
    height: 400px;
  }
  /* @media ${device.laptop} {
    height: 600px;
  } */
`;
export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  display: block;
  transition: all 0.5s;
  @media ${device.tablet} {
    width: 95%;
    height: 70%;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
export const CardTitle = styled.div`
  text-transform: uppercase;
  font-size: 8pt;
  font-weight: 250;
  line-height: 1.5;
  margin-top: 10px;
  margin-inline: 5px;
  height: 25px;
  @media ${device.tablet} {
    font-size: 11pt;
    height: 25px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 5px;
  font-size: 8pt;
  font-weight: 350;
  @media ${device.tablet} {
    font-size: 10pt;
  }
`;
