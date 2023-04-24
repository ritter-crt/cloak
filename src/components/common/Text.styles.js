import { device } from '@/src/styles';
import styled from 'styled-components';

export const StyledTitle = styled.p`
  text-transform: uppercase;
  font-size: 9pt;
  font-weight: 250;
  margin-top: 6px;
  margin-bottom: 4px;
`;

export const Text = styled.p`
  margin-top: 10%;
  margin-bottom: 5%;
  text-transform: uppercase;
  font-weight: ${(props) => (props.fontWeight ? '100' : '250')};
  font-size: ${(props) => (props.fontSize ? '12pt' : '9pt')};
  letter-spacing: ${(props) => props.letterSpacing || 'none'};
  flex-wrap: wrap;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 15%;
`;
export const Header = styled.h1`
  font-size: ${(props) => props.fontSize || '18pt'};
  font-family: ${(props) =>
    props.fontFamily ? 'sans-serif' : 'Bodoni Moda, serif'};
  font-weight: 100;
  text-transform: uppercase;
  text-align: ${(props) => (props.align ? 'center' : 'left')};
  margin-bottom: ${(props) => props.bottom || '0%'};
`;
