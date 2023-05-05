import styled from 'styled-components';

import { device } from '@/src/styles';

export const ContentWrapper = styled.div`
  margin: ${({ margin }) =>
    margin ? '3rem 2rem 8rem 2rem ' : '6rem 2rem 5rem 2rem '};
  @media ${device.mobileL} {
    margin: 7rem 5rem 10rem 5rem auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10%;
`;

export const HeaderWrapper = styled.div`
  border-bottom: solid 0.1px;
`;
