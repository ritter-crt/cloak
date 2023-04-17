import NavBar from '@/src/components/NavBar';
import { device } from '@/src/styles';
import { getSession } from 'next-auth/react';
import styled from 'styled-components';
import User from './users/[id]';

export default function Profile() {
  return (
    <>
      <title>your profile</title>
      <NavBar></NavBar>
      <ContentWrapper>
        <User></User>
      </ContentWrapper>
    </>
  );
}
const ContentWrapper = styled.div`
  margin-top: 100px;
  margin-left: 7%;
  margin-right: 7%;
  margin-bottom: 20%;
  @media ${device.mobileL} {
    margin-left: 10%;
    margin-right: 10%;
  }
`;
