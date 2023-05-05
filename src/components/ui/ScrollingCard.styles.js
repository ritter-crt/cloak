import { device } from '@/src/styles';
import styled from 'styled-components';

export const ScrollingWrapper = styled.div`
  margin-bottom: 40%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  @media ${device.tablet} {
    height: 400px;
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
    height: 150px;
  }
`;
