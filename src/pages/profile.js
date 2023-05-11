import User from './users/[id]';

import NavBar from '@/src/components/ui/NavBar';
import { ContentWrapper } from '../components/ui/Wrapper.styles';

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
