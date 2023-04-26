import { device } from '@/src/styles';
import styled from 'styled-components';

export const Title = styled.p`
  text-transform: uppercase;
  font-size: ${({ fontSize }) => fontSize || '10pt'};
  font-family: ${({ fontFamily }) =>
    fontFamily ? 'sans-serif' : 'Bodoni Moda, serif'};
  font-weight: 250;
  margin-top: 0.5rem;
  margin-bottom: ${({ bottom }) => bottom || '1rem'};
`;

export const Text = styled.p`
  margin-top: 10%;
  margin-bottom: 5%;
  text-transform: uppercase;
  font-weight: ${({ fontWeight }) => (fontWeight ? '100' : '250')};
  font-size: ${({ fontSize }) => fontSize || '12pt'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || 'none'};
  flex-wrap: wrap;
`;

export const Description = styled.p`
  font-size: 12pt;
  font-family: 'Bodoni Moda', serif;
  font-weight: 100;
`;

export const Instruction = styled.p`
  line-height: 1.5rem;
  font-size: 10pt;
  padding: 1rem;
`;

export const Price = styled.p``;

export const Difficulty = styled.p`
  font-size: 10pt;
  font-weight: 100;
  text-align: right;
  margin-bottom: 3rem;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 15%;
`;
export const Header = styled.h1`
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
