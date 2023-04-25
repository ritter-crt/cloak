import styled from 'styled-components';

import { device } from '@/src/styles';

export const ContentWrapper = styled.div`
  margin: ${(props) =>
    props.margin ? '3rem 2rem 8rem 2rem' : '10rem 2rem 5rem 2rem'};
  @media ${device.mobileL} {
    margin: 10rem 5rem 10rem 5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 10%;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.div`
  border-bottom: solid 0.1px;
`;
