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
  text-transform: uppercase;
  font-weight: ${({ fontWeight }) => (fontWeight ? '100' : '250')};
  font-size: ${({ fontSize }) => fontSize || '12pt'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || 'none'};
  flex-wrap: wrap;
  @media ${device.tablet} {
    margin-top: 5%;
  }
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
