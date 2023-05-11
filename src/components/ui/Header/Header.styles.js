import styled from 'styled-components';

import { device } from '@/src/styles';

export const HeaderText = styled.h1`
  font-size: ${({ fontSize }) => fontSize || '18pt'};
  font-family: ${({ fontFamily }) =>
    fontFamily ? 'sans-serif' : 'Bodoni Moda, serif'};
  font-weight: 100;
  text-transform: uppercase;
  text-align: ${(align) => (align ? 'left' : 'center')};
  margin-bottom: ${({ bottom }) => bottom || '6vh'};
  @media ${device.mobileL} {
    font-size: 24pt;
    letter-spacing: 0.3rem;
  }
`;
