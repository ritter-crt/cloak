import NavBar from '@/src/components/common/NavBar/NavBar';
import { device } from '@/src/styles';
import { getSession } from 'next-auth/react';
import styled from 'styled-components';
import User from './users/[id]';
import { ContentWrapper } from '../components/common/ContentWrapper.styles';

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
