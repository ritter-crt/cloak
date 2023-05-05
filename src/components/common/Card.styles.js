import styled from 'styled-components';
import Image from 'next/image';
import { device } from '@/src/styles';

export const ScrollingWrapper = styled.div`
  margin-bottom: 40%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  @media ${device.tablet} {
    width: 250px;
    height: 350px;
  }
`;

export const ScrollingCard = styled.div`
  width: 150px;
  height: 250px;
  margin-bottom: 1rem;
  margin: ${({ margin }) => margin || 'none'};
  display: ${({ display }) => display || 'inline-block'};
  @media ${device.tablet} {
    width: 250px;
    height: 350px;
  }
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const CardTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 0.5rem;
`;

export const CardText = styled.p`
  font-size: 10pt;
  font-weight: 350;
`;

////______________new

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  column-gap: 5%;
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    column-gap: 5%;
  }
  /* @media ${device.laptop} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 5%;
  } */
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
  /* @media ${device.laptop} {
    width: 95%;
    height: 65%;
    &:hover {
      transform: scale(1.05);
    } 
  } */
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
    font-size: 10pt;
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
    font-size: 12pt;
  }
`;
