import { device } from '@/src/styles';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: ${(props) =>
    props.margin ? '20rem 2rem 20rem 2rem' : '10rem 2rem 20rem 2rem'};
  @media ${device.mobileL} {
    margin: 10rem 5rem 10rem 5rem;
  }
`;
