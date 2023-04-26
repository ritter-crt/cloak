import styled from 'styled-components';
import Image from 'next/image';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ScrollingWrapper = styled.div`
  margin-bottom: 40%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

export const Card = styled.div`
  width: 150px;
  height: 250px;
  margin-bottom: 1rem;
  margin: ${({ margin }) => margin || 'none'};
  display: ${({ display }) => display || 'inline-block'};
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const CardTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 0.5rem;
`;
export const CardTitle = styled.p`
  text-transform: uppercase;
  height: 10%;
  font-size: 9pt;
  font-weight: 250;
  margin: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 10pt;
  font-weight: 350;
`;
